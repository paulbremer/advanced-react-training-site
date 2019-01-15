import React, { Component } from 'react';
import styled from 'styled-components'

class Module extends Component {
    constructor(props) {
        super(props);
        this.state = { watched: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let watchedVideos = JSON.parse(localStorage.getItem('watchedVideos'));

        if (watchedVideos) {
            if (!watchedVideos.includes(this.props['data-id'])) {
                watchedVideos.push(this.props['data-id']);
                this.setState({ watched: true });
            } else {
                const index = watchedVideos.indexOf(this.props['data-id']);
                watchedVideos.splice(index, 1);
                this.setState({ watched: false });
            }
        } else {
            watchedVideos = [];
            watchedVideos.push(this.props['data-id']);
            this.setState({ watched: true });
        }

        localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
    }

    checkLocalStorage() {
        const watchedVideos = JSON.parse(localStorage.getItem('watchedVideos'));
        if (watchedVideos && watchedVideos.includes(this.props['data-id'])) {
            this.setState({ watched: true });
        }
    }

    componentDidMount() {
        this.checkLocalStorage();
    }

    render(props) {
        const { children } = this.props

        const StyledModule = styled.div`
            position: relative;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 0.9rem;
            font-weight: 900;
            word-break: break-word;
            background: #262626;
            color: #fff;
            height: 100%;
            padding: 0.8rem;
            border: 3px solid #262626;

            &.watched {
                border: 3px solid #00cf00;

                &:before {
                    content: '✅';
                    position: absolute;
                    right: 15px;
                    top: 15px;
                }
            }
        `

        const Module = (
            <StyledModule>
              Hello, my name is Godzilla
            </StyledModule>
        );

        return (
            <div>
                <StyledModule onClick={this.handleClick} className={`module ${this.state.watched ? 'watched' : ''}`}>
                    { children }
                </StyledModule>
                { this.state.showModal ? Module : '' }
            </div>
        );
    }
}

export default Module;
