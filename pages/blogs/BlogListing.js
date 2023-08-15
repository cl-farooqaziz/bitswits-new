import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/BlogListBody.module.css'
//
import arrow from '../../public/images/blogBanners/right-arrow.webp'
import blogimg1 from '../../public/images/blogBanners/1.png'
import blogimg2 from '../../public/images/blogBanners/2.png'
import blogimg3 from '../../public/images/blogBanners/3.png'
import blogimg4 from '../../public/images/blogBanners/4.png'
import blogimg5 from '../../public/images/blogBanners/5.png'


const BlogListing = () => {

    const [posts, setPosts] = useState([]);

    const [show, setshow] = useState(true);




    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('https://bookwritingexperts.com/wp-json/wp/v2/posts?_embed&per_page=10');
            const data = await response.json();
            setPosts(data);
            setshow(false);

        };

        fetchData();
    }, []);

    console.log(posts[1]);

    const imageLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    console.log(imageLoader);

    return (
        <>
            <section className={styles.blogListBody}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Bolgs</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font65 black fontf font-bold line60 black'>Insight</h2>
                        </Col>
                    </Row>
                    {/* <div className='mt-5 pt-5'>
                        <Row>
                            <Col lg={9}>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg1} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg2} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg3} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg4} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg5} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg1} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg2} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg3} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg4} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="/blog-page" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg5} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <Link href="/blog-page">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </Link>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col lg={3}>
                                <div className={`${styles.cta} mt-5 mt-lg-0`}>
                                    <div className={styles.ctaImg}>
                                        <Link href="/blog-page" className={`${styles.ctaBtn} mt-5`}>
                                            get custom web designs
                                        </Link>
                                    </div>
                                </div>

                                <div className={`${styles.platForm} mt-5`}>
                                    <h5 className={styles.subTitle}>
                                        Endorsements on different Platforms
                                    </h5>
                                    <h5 className={styles.title}>
                                        Awards And Recognition
                                    </h5>
                                    <p className={styles.para}>
                                        Thriving on accelerating the path to disruption and value creation in all directions has enabled
                                        us to receive acknowledgment and recognition by leading ratings and review platforms.
                                    </p>
                                    <Link href="/blog-page" className={`${styles.arrowBtn} mt-3`}>
                                        <span>View Reviews</span>
                                        <Image className='img-fluid' src={arrow} alt="bitswits" />
                                    </Link>
                                </div>

                                <div className={`${styles.newsLetter} mt-5`}>
                                    <h4>Signup for</h4>
                                    <h5>Newsletter</h5>
                                    <form className="mt-4">
                                        <div>
                                            <input type="text" name="name" id="name" placeholder="FULL NAME" />
                                        </div>
                                        <div className="mt-3">
                                            <input type="email" name="email" id="email" placeholder="EMAIL ADDRESS" />
                                        </div>
                                        <button type="submit" className={`${styles.arrowBtn} mt-4`}>
                                            <span>Submit Details</span>
                                            <Image className='img-fluid' src={arrow} alt="bitswits" />
                                        </button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div> */}

                    {show ?
                        <h1 className="font50 fw700 color-blue t-center font-f">Loading ...</h1>
                        :
                        ''
                    }
                    {posts.map((item, i) =>

                        <Col md={4} key={i}>



                            <div className={styles.bloglist}>
                                <Image loading="lazy" width={1000} height={300} src={item._embedded['wp:featuredmedia']['0'].source_url} loader={imageLoader} className='img-fluid' alt="book_writing_cube" />
                                <div className={styles.cardbodylist}>
                                    <h3><Link href={`blogs/${item.slug}`} className="mt-3 font-f color-black textdocationnone hover">{item.title.rendered}</Link></h3>
                                    <Link href={`blogs/${item.slug}`} className={`${styles.blogbtn} mt-3`}>Continue Reading »</Link>
                                </div>
                            </div>
                        </Col>
                    )}
                </Container>
            </section>
        </>
    )
}

export default BlogListing
