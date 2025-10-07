import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard({ title, path, imgUrl }) {
    return (
        <Col sm={12} md={6} lg={4} xl={4}>
            <a className='text-light' href={path}>
                <div className='project-item mx-auto'>
                    <img src={imgUrl} alt={title} />
                    <div className='project-desc'>
                        <h3>{title}</h3>
                    </div>
                </div>
            </a>
        </Col>
    )
}
