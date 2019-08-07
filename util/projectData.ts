import { Project } from '../interfaces'
import slugify from 'slugify';
import post1 from '../../src/blog-post.1.md';
import post2 from '../../src/blog-post.2.md';
import post3 from '../../src/blog-post.3.md';


/** Static project data. */
export function dataArray(): Project[]{

    const data : Project[] =[{
            imageUrl:
            'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
        title: 'Chat: Node.js, Socket.io, jQuery and many other amazing techonologies',
        slug: "",
        contentMarkdown: post1,
        width: '40%',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
        title: 'Massage',
        slug: "",
        contentMarkdown: post2,
        width: '20%',
    },
    {
        imageUrl:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
        title: 'Hiking',
        slug: "",
        contentMarkdown: post3,
        width: '40%',
    }]

    data.forEach(p => p.slug = slugify(p.title));
    return data;
} 

/**
 * Calls a mock API which finds a project by SLUG from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(slug: string) {
    const selected = dataArray().find(data => data.slug === slug)

    if (!selected) {
        throw new Error('Cannot find project')
    }

    return selected
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new Error('Cannot find projects')
    }

    return dataArray
}
