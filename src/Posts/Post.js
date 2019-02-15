import React, { Component, Fragment } from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag'

import UpdatePost from '../Posts/UpdatePost'
import EditMode from '../Posts/EditMode'

const POST_QUERY = gql`
  query post($id: ID!){
		post(where: {id: $id }) {
			id
			title
			body
			check
  	}
		isEditMode @client
	}
`;

export default class Post extends Component {
	render() {
		const { id } = this.props.match.params
		return (
			<Query
				query={POST_QUERY}
				variables={{
					id
				}}
			>
				{({ data, loading }) => {
					if(loading) return (<p>Loading...</p>)
					const { post, isEditMode } = data
					return (
						<Fragment>
							<EditMode isEditMode={isEditMode} />
							<div>
								{ isEditMode
								?
									(
										<section>
											<p>Edit post</p>
											<UpdatePost post={post} />
										</section>

									)
								:
									(
										<section>
											<h1>{post.title}</h1>
											<p>{post.body}</p>
										</section>
									)
								}
							</div>
						</Fragment>
					)
				}}
			</Query>
		)
	}
}
