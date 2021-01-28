import React from 'react';

class LikeComponent extends React.Component {
    state = {
        initialLikeCount: 100,
        initialDislikeCount: 25,
        likeCount: 100,
        dislikeCount: 25,
        onlike: false,
        onDislike: false,
    }

    increment = () => {
        if(this.state.onlike){
            this.setState(({onlike}) => ({onlike: !onlike}));
            if(this.state.likeCount > this.state.initialLikeCount){
                this.decrementLike();
            }
        } else {
            this.setState(({onlike}) => ({onlike: !onlike}))
            this.setState(({likeCount}) => ({likeCount: likeCount + 1}))
            if(this.state.dislikeCount > this.state.initialDislikeCount){
                this.decrementDislike();
            }
        }
    }

    clickDislike = () => {
        if(this.state.onDislike){
            this.setState(({onDislike}) => ({onDislike: !onDislike}));
            if(this.state.dislikeCount > this.state.initialDislikeCount){
                this.decrementDislike();
            }
        } else {
            this.setState(({onDislike}) => ({onDislike: !onDislike}))
            this.setState(({dislikeCount}) => ({dislikeCount: dislikeCount + 1}))
            if(this.state.likeCount > this.state.initialLikeCount){
                this.decrementLike();
            }
        }
    }

    decrementDislike = () => {
        this.setState(({dislikeCount}) => ({dislikeCount: dislikeCount - 1}))
        this.setState(({onDislike}) => ({onDislike: false}))
    }

    decrementLike = () => {
        this.setState(({likeCount}) => ({likeCount: likeCount - 1}))
        this.setState(({onlike}) => ({onlike: false}))
    }

    render() {
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                    {this.state.onlike ?
                    <button className='liked' onClick={this.increment}>{'Like | ' + this.state.likeCount}</button>
                    :
                    <button className='like-button' onClick={this.increment}>{'Like | ' + this.state.likeCount}</button>
                    }
                    
                    <span className='spanArea'></span>
                    {this.state.onDislike ?
                    <button className='disliked' onClick={this.clickDislike}>{'Dislike | ' + this.state.dislikeCount}</button>
                    :
                    <button className='dislike-button' onClick={this.clickDislike}>{'Dislike | ' + this.state.dislikeCount}</button>
                    }
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        text-align: center;
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-size: 1rem;
                        font-weight: bold;
                        padding: 5px 10px;
                        color: #1565c0;
                    }
                    .spanArea {
                        margin-left: 10px;
                    }
                `}</style>
            </>
        );
    }
}

export default LikeComponent;