import { Component } from '@stencil/core';

@Component({
    tag: 'my-app'
})
export class MyApp {
    render() {
        return [
            <ul>
                <li>
                    <stencil-route-link router="#router" url="/">Home page</stencil-route-link>
                </li>
                <li>
                    <stencil-route-link router="#router" url="/demo">Demo page</stencil-route-link>
                </li>
            </ul>,
            <stencil-router id="router">
                <stencil-route url="/" component="home-page" router="#router" />
                <stencil-route url="/demo" component="demo-page" router="#router" />
            </stencil-router>
        ];
    }
}