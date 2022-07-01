import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import DefaultPhoto from '../../images/logo.png'

const GetForm = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:9000/get', {
                    method: 'GET'
                })
                const data = await res.json();
                setPosts(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        return getData;
    }, [])

    
    return (
        <div>
            <h2 className='mt-5 mb-5'>Recent Form</h2>
            <div className='row'>
                {!posts ? <h2>Loading...</h2> :
                    posts.map((post) => {
                        let photoUrl= post.photo?`http://localhost:9000/photo/${post._id}?${new Date().getTime()}`:DefaultPhoto
                      
                       return <div className='col-lg-4' key={post._id}>
                            <MDBCard>
                                <MDBCardImage
                                 src={photoUrl}
                                 alt={post.name}
                                 style={{height:"300px",width:"100%",objectFit:"cover"}}
                                 />
                                <MDBCardBody>
                                    <MDBCardTitle>{post.name}</MDBCardTitle>
                                    <MDBCardText>
                                   {post.email}
                                     </MDBCardText>
                                    <MDBBtn className='btn btn-warning' href='#'>Edit</MDBBtn>
                                    <MDBBtn className='btn btn-danger ms-3' href='#'>Delete</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    })

                }

            </div>

        </div>
    )
}

export default GetForm