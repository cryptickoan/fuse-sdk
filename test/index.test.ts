import { spawn } from 'child_process'

let process

const initiateNode = async () => {
    try {
        process = spawn("anvil", {shell: true})
    
        process.stdout.on( 'data', ( data ) => {
            console.log( `stdout: ${ data }` );
        } );
        
        process.stderr.on( 'data', ( data ) => {
            console.log( `stderr: ${ data }` );
        } );
        return true
    } catch (e) {
        throw e
    }
}

beforeAll(async () => {
    try {
        await initiateNode()
    } catch(e) {
        console.log(e)
    }
})

it("Should console log", () => {
    console.log("hello")
})

afterAll(() => {
    console.log('lol')
    process.kill()
})


