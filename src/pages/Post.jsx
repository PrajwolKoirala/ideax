/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import axios from 'axios';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [files, setFiles] = useState('');
    const handleSubmit = async (e) => {

        e.preventDefault();
        // const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        // existingPosts.push(newPost);
        // localStorage.setItem('posts', JSON.stringify(existingPosts));
        // Clear the input fields
        const postData = { title, summary, content };
        try {
            const response = await axios.post('http://localhost:3001/createpost', postData);

            if (response.ok) {
                const newPost = await response.json();
                // Update your UI to display the new post (add it to a list, etc.)
                console.log('New post:', newPost);
            } else {
                const errorMessage = await response.text();
                console.error('Failed to create post', errorMessage);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    // setTitle('');
    // setSummary('');
    // setContent('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    // eslint-disable-next-line no-undef
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="title" placeholder={'title'} value={title} onChange={e => setTitle(e.target.value)} />
                <input type="summary" placeholder={'Summary'} value={summary} onChange={e => setSummary(e.target.value)} />
                <input type="file" onChange={e => setFiles(e.target.files)} />
                <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
                <button style={{ marginTop: '10px' }}>Create Post</button>
            </form>
        </div>
    )
}