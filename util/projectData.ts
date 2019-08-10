import { Project } from '../interfaces'
import projects from './projects.json'



/** Static project data. */
export const dataArray: Array<Project> = projects;
/**
 * Calls a mock API which finds a project by SLUG from the list above.
 *
 * Throws an error if not found.
 */
export function findData(slug: string) {
    const selected = dataArray.find(data => data.slug === slug)

    if (!selected) {
        throw new Error('Cannot find project')
    }

    return selected
}

/** Calls a mock API which returns the above array to simulate "get all". */
export function findAll() {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new Error('Cannot find projects')
    }

    return dataArray
}
