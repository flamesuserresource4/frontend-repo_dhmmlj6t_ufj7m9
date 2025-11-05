import React, { useEffect, useMemo, useState } from 'react';
import { Save, Edit, Plus, Trash2, Loader2 } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const emptyPost = {
  title: '',
  subtitle: '',
  content: '',
  author: '',
  category: '',
  tags: '',
  cover_image: '',
  status: 'published',
};

function AdminEditor() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(emptyPost);
  const [editingId, setEditingId] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/posts?limit=50`);
      const data = await res.json();
      setPosts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const startEdit = (post) => {
    setEditingId(post.id);
    setForm({
      title: post.title || '',
      subtitle: post.subtitle || '',
      content: post.content || '',
      author: post.author || '',
      category: post.category || '',
      tags: (post.tags || []).join(', '),
      cover_image: post.cover_image || '',
      status: post.status || 'published',
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyPost);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        subtitle: form.subtitle || undefined,
        content: form.content,
        author: form.author || undefined,
        category: form.category || undefined,
        tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : undefined,
        cover_image: form.cover_image || undefined,
        status: form.status || 'published',
      };

      let res;
      if (editingId) {
        res = await fetch(`${API_BASE}/api/posts/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch(`${API_BASE}/api/posts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) throw new Error('Failed to save');
      await fetchPosts();
      resetForm();
    } catch (e) {
      console.error(e);
      alert('Could not save the post. Please check required fields.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this post?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/posts/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed');
      await fetchPosts();
    } catch (e) {
      alert('Failed to delete');
    }
  };

  const published = useMemo(() => posts.filter((p) => p.status === 'published'), [posts]);

  return (
    <section className="w-full bg-[#0a0b10] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Publish & Edit News</h2>
          <button onClick={resetForm} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10">
            <Plus size={16} /> New Post
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Editor */}
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 text-sm text-white/60">{editingId ? 'Editing existing post' : 'Create a new post'}</div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/60">Title</label>
                <input name="title" required value={form.title} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/60">Subtitle</label>
                <input name="subtitle" value={form.subtitle} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/60">Author</label>
                <input name="author" value={form.author} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/60">Category</label>
                <input name="category" value={form.category} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/60">Cover Image URL</label>
                <input name="cover_image" value={form.cover_image} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/60">Tags (comma separated)</label>
                <input name="tags" value={form.tags} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/60">Content</label>
                <textarea name="content" required rows={6} value={form.content} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/60">Status</label>
                <select name="status" value={form.status} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#6f5cff]/50">
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <div className="flex items-end justify-end">
                <button disabled={saving} type="submit" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#6f5cff] to-[#00d4ff] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
                  {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} {editingId ? 'Update' : 'Publish'}
                </button>
              </div>
            </div>
          </form>

          {/* List */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-white/60">Latest posts</div>
              {loading && <Loader2 size={16} className="animate-spin text-white/60" />}
            </div>
            <div className="space-y-3">
              {posts.map((p) => (
                <div key={p.id} className="flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-3">
                  <div>
                    <div className="text-sm font-semibold">{p.title}</div>
                    <div className="text-xs text-white/60">{p.category || 'General'} • {p.status}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => startEdit(p)} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/10 px-2 py-1 text-xs hover:bg-white/20"><Edit size={14} /> Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/10 px-2 py-1 text-xs text-red-300 hover:bg-white/20"><Trash2 size={14} /> Delete</button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && !loading && (
                <div className="text-sm text-white/60">No posts yet. Publish your first article on the left.</div>
              )}
            </div>
          </div>
        </div>

        {/* Published Preview */}
        {published.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold">Published preview</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {published.slice(0, 3).map((p) => (
                <article key={p.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                  {p.cover_image && (
                    <img src={p.cover_image} alt={p.title} className="h-40 w-full object-cover" />
                  )}
                  <div className="p-4">
                    <div className="mb-1 text-xs text-white/60">{p.category || 'General'}</div>
                    <div className="text-base font-semibold">{p.title}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminEditor;
