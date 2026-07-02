"""Coremore API backend tests."""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://coremore-test.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health / root ----
def test_root_welcome(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "Coremore" in data.get("message", "")


# ---- Contact: success ----
def test_create_contact_success(session):
    payload = {
        "name": "TEST_Jane Doe",
        "email": "TEST_jane@example.com",
        "company": "TEST_Acme Co",
        "message": "We would like to discuss a turnaround engagement.",
    }
    r = session.post(f"{API}/contact", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "submitted_at" in data
    assert "_id" not in data
    # persist for list check
    pytest.created_contact_id = data["id"]


# ---- Contact validation ----
def test_contact_invalid_email(session):
    r = session.post(f"{API}/contact", json={
        "name": "TEST_X", "email": "not-an-email",
        "company": "C", "message": "Hello there friend",
    })
    assert r.status_code == 422


def test_contact_missing_required(session):
    r = session.post(f"{API}/contact", json={"email": "a@b.com"})
    assert r.status_code == 422


def test_contact_message_too_short(session):
    r = session.post(f"{API}/contact", json={
        "name": "TEST_Y", "email": "y@example.com",
        "company": "Z", "message": "hi",
    })
    assert r.status_code == 422


# ---- List contacts ----
def test_list_contacts_no_objectid_leak(session):
    r = session.get(f"{API}/contact")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) > 0
    # no _id leak
    for it in items:
        assert "_id" not in it
        assert "id" in it and "submitted_at" in it
    # ordering desc by submitted_at
    ts = [it["submitted_at"] for it in items]
    assert ts == sorted(ts, reverse=True)
    # the created one is present
    ids = [it["id"] for it in items]
    assert getattr(pytest, "created_contact_id", None) in ids


# ---- Status backward compatibility ----
def test_status_post_and_get(session):
    r = session.post(f"{API}/status", json={"client_name": "TEST_client"})
    assert r.status_code == 200
    body = r.json()
    assert body["client_name"] == "TEST_client"
    assert "id" in body and "timestamp" in body

    r2 = session.get(f"{API}/status")
    assert r2.status_code == 200
    arr = r2.json()
    assert isinstance(arr, list)
    for it in arr:
        assert "_id" not in it
