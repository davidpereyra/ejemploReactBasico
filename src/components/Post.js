import React, { Component } from 'react';


export default class Post extends Component {
    
    state = {
        post: []
    }

    //obtengo datos (antes de cargar aplicacion)
    //componentDidMount se ejecuta cuando el compoenente ya ha sido montado (cargado en pantalla)
    async componentDidMount(){
        //utilizo una API 
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        //async para trabajarlo de manera asincrona y esperar a await
        const data = await respuesta.json();
        this.setState({post: data});
    }
    render() {
        return (
            <div>
                <h1>Post</h1>
                {
                    this.state.post.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
