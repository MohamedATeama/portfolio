import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard({ title, description, imgUrl }) {
    return (
        <Col sm={12} md={6} lg={4} xl={4}>
            <div className='project-item mx-auto'>
                <img src={imgUrl} alt={title} />
                <div className='project-desc'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}
