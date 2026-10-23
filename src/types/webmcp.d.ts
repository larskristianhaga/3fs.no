// Declarative WebMCP (https://github.com/webmachinelearning/webmcp): attributes that expose a form
// as a tool to AI agents in the browser. Browsers without support ignore them.
import 'react'

declare module 'react' {
    interface FormHTMLAttributes<T> {
        toolname?: string
        tooldescription?: string
    }
    interface InputHTMLAttributes<T> {
        toolparamdescription?: string
    }
    interface TextareaHTMLAttributes<T> {
        toolparamdescription?: string
    }
}

declare global {
    interface SubmitEvent {
        // Only present in browsers that support WebMCP
        readonly agentInvoked?: boolean
        respondWith?(agentResponse: Promise<unknown>): void
    }
}
