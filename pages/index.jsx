import { Button, Card, Container, Grid , Input, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="cover"  >
      <Container>

        <Grid.Container gap={3} justify="space-between" alignItems="center">
        <Grid  md={8} xs={12}>
          <div className="cover__caption">
            <h3 className="cover__caption--h3">
            Jatdev Empowering <br /> Privacy
            </h3>
            <p className="cover__caption--paragraph">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
          </div>
        </Grid>
        <Grid  md={4} xs={12}>
          <Image src={'/images/home/cover.png'} alt={'cover'} width={443} height={400} />
        </Grid>
        </Grid.Container>
      </Container>
      
      
    </section>
    
    {/*  */}
    <section className="values">
      <Container>
        <Grid.Container>
          <Grid xs={12} justify='center'>
            <div className="values__header">
              <h3>Our Core Values</h3>
              <p>Using basic skills you can improve your business stuff with Around</p>

            </div>

          </Grid>
        </Grid.Container>
        <Spacer y={2}/>
        <Grid.Container gap={2} >
          <Grid md={4} xs={12}>
          <Card className="values__card">
              <Card.Header alignItems='center' className="values__card--header">
                <Image src='/images/Home/innovation.png' alt="trust" width={33} height={33} />
                <h4 color="white">
                Innovation
                </h4>

              </Card.Header>
              <Card.Body className="values__card--body">
                <p>Using basic skills you can improve your business stuff with Around Using basic skills </p>
              </Card.Body>
            </Card>
          </Grid>
          <Grid md={4} xs={12}>
            <Card className="values__card">
              <Card.Header alignItems='center' className="values__card--header">
                <Image src='/images/Home/innovation.png' alt="trust" width={33} height={33} />
                <h4 color="white">
                Innovation
                </h4>

              </Card.Header>
              <Card.Body className="values__card--body">
                <p>Using basic skills you can improve your business stuff with Around Using basic skills </p>
              </Card.Body>
            </Card>
          </Grid>
          <Grid md={4} xs={12}>
          <Card className="values__card">
              <Card.Header alignItems='center' className="values__card--header">
                <Image src='/images/Home/innovation.png' alt="trust" width={33} height={33} />
                <h4 color="white">
                Innovation
                </h4>

              </Card.Header>
              <Card.Body className="values__card--body">
                <p>Using basic skills you can improve your business stuff with Around Using basic skills </p>
              </Card.Body>
            </Card>
          </Grid>
          <Grid md={4} xs={12}>
          <Card className="values__card">
              <Card.Header alignItems='center' className="values__card--header">
                <Image src='/images/Home/innovation.png' alt="trust" width={33} height={33} />
                <h4 color="white">
                Innovation
                </h4>

              </Card.Header>
              <Card.Body className="values__card--body">
                <p>Using basic skills you can improve your business stuff with Around Using basic skills </p>
              </Card.Body>
            </Card>
          </Grid>
          <Grid md={4} xs={12}>
          <Card className="values__card">
              <Card.Header alignItems='center' className="values__card--header">
                <Image src='/images/Home/innovation.png' alt="trust" width={33} height={33} />
                <h4 color="white">
                Innovation
                </h4>

              </Card.Header>
              <Card.Body className="values__card--body">
                <p>Using basic skills you can improve your business stuff with Around Using basic skills </p>
              </Card.Body>
            </Card>
          </Grid>
          <Grid md={4} xs={12}>
          <Card className="values__card">
              <Card.Header alignItems='center' className="values__card--header">
                <Image src='/images/Home/innovation.png' alt="trust" width={33} height={33} />
                <h4 color="white">
                Innovation
                </h4>

              </Card.Header>
              <Card.Body className="values__card--body">
                <p>Using basic skills you can improve your business stuff with Around Using basic skills </p>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </section>
    {/*  */}
    <section className="partnership">
      <Container>
        <Card variant="bordered">
          <Card.Body>
            <Grid.Container alignItems="center">
              <Grid md={7} xs={12}>
              <div className="partnertship__caption">
                  <h4 className="partnertship__caption--h4">
                  Partnership
                  </h4>
                  <p className="partnertship__caption--paragraph">
                  Using basic skills you can improve your business stuff with Around Using basic skills                    </p>
                </div>
              </Grid>
              <Grid md={5} xs={12}>
                <form >
                <Input
                  className="partnership__input"
                  
                  color="primary"
                  labelPlaceholder="Enter your email Address"
                  contentRight={
                    // <SunIcon filled width="16" height="16" fill="#f5a623" />
                    <Button className="partnership__input--button" auto>
                    Get In Touch
                  </Button>
                  }
                />
                </form>
              </Grid>

            </Grid.Container>
          </Card.Body>
        </Card>

      </Container>
    </section>
    
    <section className="blogs">
      <Container>
        <Grid.Container gap={2}>
          <Grid md={10} xs={12}>
              <h3>Our Latest Blog Posts</h3>
          </Grid>
          <Grid md={2} xs={12}>
              <Button style={{width:'100%'}} color="warning" auto>See All Blog Posts</Button>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2}>
          <Grid md={4} xs={12}>
            <div className="blogs__content">
              <div className="blogs__content--blog">

              <Image src="/images/blogs/blog1.jpeg"                
                objectFit="cover"
                width={270}
                height={270}
                className="blogs__content--blog-image"
                alt='blog 1'/>
                <div className="blogs__content--blog--body">
                  <Grid.Container>
                    <time className="">08-11-2021</time>
                    <Spacer x={1}/>
                    <span>Category</span>
                  </Grid.Container>
                  <h5 className="blogs__content--blog-header"
>
                  Believing neglected so so allowance existence departure.
                  </h5>
                  <p className="blogs__content--blog-paragraph">
                  End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid md={4} xs={12}>
            <div className="blogs__content">
              <div className="blogs__content--blog">

              <Image src="/images/blogs/blog2.jpeg"                
                objectFit="cover"
                width={270}
                height={270}
                className="blogs__content--blog-image"
                alt='blog 1'/>
                <div className="blogs__content--blog--body">
                  <Grid.Container>
                    <time className="">08-11-2021</time>
                    <Spacer x={1}/>
                    <span>Category</span>
                  </Grid.Container>
                  <h5 className="blogs__content--blog-header">
                  In design active temper be uneasy. Thirty for remove plenty regard you.                  </h5>
                  <p className="blogs__content--blog-paragraph">
                  End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid md={4} xs={12}>
            <div className="blogs__content">
              <div className="blogs__content--blog">
                <Grid.Container>
                  <Grid md={4} xs={12}>
                    <Image src="/images/blogs/blog2.jpeg"                
                    objectFit="cover"
                    width={270}
                    height={270}
                    className="blogs__content--blog-image"
                    alt='blog 1'/>
                  </Grid>
                  <Spacer x={1} />
                  <Grid md={7} xs={12}>

                    <div className="blogs__content--blog--body">
                      <Grid.Container>
                        <time className="">08-11-2021</time>
                        <Spacer x={1}/>
                        <span>Category</span>
                      </Grid.Container>
                      <h5 className="blogs__content--blog-header">
                      In design active temper be uneasy. Thirty for remove plenty regard you.                  </h5>
                      
                    </div>
                  </Grid>
                </Grid.Container>
              </div>
              <hr />
              <div className="blogs__content--blog">
                <Grid.Container>
                  <Grid md={4} xs={12}>
                    <Image src="/images/blogs/blog2.jpeg"                
                    objectFit="cover"
                    width={270}
                    height={270}
                    className="blogs__content--blog-image"
                    alt='blog 1'/>
                  </Grid>
                  <Spacer x={1} />
                  <Grid md={7} xs={12}>

                    <div className="blogs__content--blog--body">
                      <Grid.Container>
                        <time className="">08-11-2021</time>
                        <Spacer x={1}/>
                        <span>Category</span>
                      </Grid.Container>
                      <h5 className="blogs__content--blog-header">
                      In design active temper be uneasy. Thirty for remove plenty regard you.                  </h5>
                      
                    </div>
                  </Grid>
                </Grid.Container>
              </div>
              <hr />
              <div className="blogs__content--blog">
                <Grid.Container>
                  <Grid md={4} xs={12}>
                    <Image src="/images/blogs/blog2.jpeg"                
                    objectFit="cover"
                    width={270}
                    height={270}
                    className="blogs__content--blog-image"
                    alt='blog 1'/>
                  </Grid>
                  <Spacer x={1} />
                  <Grid md={7} xs={12}>

                    <div className="blogs__content--blog--body">
                      <Grid.Container>
                        <time className="">08-11-2021</time>
                        <Spacer x={1}/>
                        <span>Category</span>
                      </Grid.Container>
                      <h5 className="blogs__content--blog-header">
                      In design active temper be uneasy. Thirty for remove plenty regard you.                  </h5>
                      
                    </div>
                  </Grid>
                </Grid.Container>
              </div>
              <hr />
              <div className="blogs__content--blog">
                <Grid.Container>
                  <Grid md={4} xs={12}>
                    <Image src="/images/blogs/blog2.jpeg"                
                    objectFit="cover"
                    width={270}
                    height={270}
                    className="blogs__content--blog-image"
                    alt='blog 1'/>
                  </Grid>
                  <Spacer x={1} />
                  <Grid md={7} xs={12}>

                    <div className="blogs__content--blog--body">
                      <Grid.Container>
                        <time className="">08-11-2021</time>
                        <Spacer x={1}/>
                        <span>Category</span>
                      </Grid.Container>
                      <h5 className="blogs__content--blog-header">
                      In design active temper be uneasy. Thirty for remove plenty regard you.                  </h5>
                      
                    </div>
                  </Grid>
                </Grid.Container>
              </div>
            </div>

          </Grid>
        </Grid.Container>
      </Container>
    </section>
    </>
  )
}
