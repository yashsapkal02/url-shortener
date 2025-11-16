// pages/dashboard.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';

const BASE = process.env.NEXT_PUBLIC_BASE_URL || '';

function getToken(){ return typeof window !== 'undefined' ? localStorage.getItem('token') : null; }

export default function Dashboard(){
  const [urls, setUrls] = useState([]);
  const [form, setForm] = useState({ longUrl: '', label: '', customAlias: ''});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const token = getToken();
    if (!token) return;
    fetchUrls();
  }, []);

  async function fetchUrls(){
    setLoading(true);
    const res = await fetch('/api/url/list', { headers: { Authorization: 'Bearer ' + getToken() }});
    const data = await res.json();
    setLoading(false);
    if (res.ok) setUrls(data.urls);
    else setError(data.error || 'Failed to fetch');
  }

  async function createUrl(e){
    e.preventDefault();
    setError('');
    if (!form.longUrl) return setError('Long URL required');
    const res = await fetch('/api/url/create', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', Authorization: 'Bearer ' + getToken() },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'Failed to create');
    setForm({ longUrl:'', label:'', customAlias:''});
    fetchUrls();
  }

  async function del(id){
    if (!confirm('Delete this URL?')) return;
    const res = await fetch('/api/url/delete?id=' + id, { method: 'DELETE', headers: { Authorization: 'Bearer ' + getToken() }});
    if (!res.ok) {
      const data = await res.json();
      return setError(data.error || 'Delete failed');
    }
    fetchUrls();
  }

  return (
    <ProtectedRoute>
      <Layout>
        <h1>Your Dashboard</h1>

        <form onSubmit={createUrl}>
          <div className="form-row">
            <div style={{flex:'1 1 60%'}}>
              <label className="label">Long URL</label>
              <input style={{width:'100%'}} placeholder="https://example.com/..." value={form.longUrl} onChange={e=>setForm({...form,longUrl:e.target.value})} required />
            </div>

            <div style={{flex:'1 1 20%'}}>
              <label className="label">Label (optional)</label>
              <input placeholder="Label" value={form.label} onChange={e=>setForm({...form,label:e.target.value})} />
            </div>

            <div style={{flex:'1 1 20%'}}>
              <label className="label">Custom alias (optional)</label>
              <input placeholder="alias (no spaces)" value={form.customAlias} onChange={e=>setForm({...form,customAlias:e.target.value})} />
            </div>
          </div>

          <div style={{marginTop:8}}>
            <button type="submit">Create Short URL</button>
          </div>
        </form>

        {error && <p className="error">{error}</p>}

        <h2 style={{marginTop:16}}>Your URLs {loading ? '(loading...)' : ''}</h2>

        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Long URL</th>
              <th>Short URL</th>
              <th>Created At</th>
              <th>Clicks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {urls.length === 0 && (
              <tr><td colSpan="6"><small>No URLs yet.</small></td></tr>
            )}

            {urls.map(u => (
              <tr key={u._id}>
                <td>{u.label || '-'}</td>
                <td style={{maxWidth:350, overflow:'hidden'}}>
                  <a href={u.longUrl} target="_blank" rel="noreferrer">{u.longUrl}</a>
                </td>
                <td>
                  <a href={`${BASE}/${u.shortCode}`} target="_blank" rel="noreferrer">{BASE}/{u.shortCode}</a>
                </td>
                <td>{new Date(u.createdAt).toLocaleString()}</td>
                <td>{u.clicks || 0}</td>
                <td><button onClick={()=>del(u._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </ProtectedRoute>
  );
}
