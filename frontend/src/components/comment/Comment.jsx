import { Link } from "react-router-dom"

export default function Comment({ comment }) {
    return (
        <>
        <p class="mb-1">
            comment.username 
            <span class="small">comment.comment_time</span>
        </p>
        <button><i class="fas fa-reply fa-xs"></i><span class="small">reply</span></button>
        <p class="small mb-0">
            comment.comment_text
        </p>
        </>
    );
}