import { Project } from '../interfaces'
import projects from './projects.json'
import 'isomorphic-unfetch'


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

/* 
    This method accepts a slug that corresponds to one of the projects in ./projects.json
    Then it uses the markdownUrlPath of the entry which should be like "/name-of-repo/name-of-branch"
    and then it returns a promise with the raw README from my github account.
*/
export async function getREADMEfromMyGithub(slug: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const selected = dataArray.find(data => data.slug === slug)
        if (!selected) {
            reject(new Error("No project matches the slug"));
        } else {
            fetch(`https://raw.githubusercontent.com/stefanosAgelastos${selected.markdownUrlPath}/README.md`,
                 { headers: { 'Accept': 'text/plain; charset=utf-8' } })
                .then(value => value.text())
                .then(value => resolve(value));
        }
    });
}
/** Calls a mock API which returns the above array to simulate "get all". */
/* export function findAll() {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new Error('Cannot find projects')
    }

    return dataArray
} */
