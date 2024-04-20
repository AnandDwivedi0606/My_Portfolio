import React from "react";
import ProjectList from "./ProjectList";

export default function Project() {

    let data = [
        {
            no: 1,
            title: "Weather Report App",
            description: "Our Weather Report App is your essential companion for staying ahead of the elements. With intuitive design and real-time updates, it delivers comprehensive forecasts tailored to your location. Whether you're planning a weekend getaway or simply navigating your daily routine, our app provides detailed insights into temperature fluctuations, precipitation probabilities, and severe weather alerts. Stay informed and prepared for whatever nature throws your way with our reliable and user-friendly Weather Report App.",
            link: "https://ananddwivedi0606.github.io/WEATHER_APP_Javascript/",
            img: "./assets/png/Project 1.png",

        },
        {
            no: 2,
            title: "TO DO App",
            description: "Introducing our To-Do App, the ultimate tool for organizing your tasks and maximizing productivity. With its sleek interface and intuitive features, managing your daily agenda has never been easier. Simply input your tasks, set due dates, and prioritize your to-dos to stay on top of your commitments. Whether you're juggling work projects, household chores, or personal goals, our app keeps everything neatly organized and easily accessible. Say goodbye to forgotten tasks and hello to efficient task management with our To-Do App.",
            link: "https://ananddwivedi0606.github.io/TO_DO_Javascript/",
            img: "./assets/png/Project 2.png",

        },
        {
            no: 3,
            title: "Analog Clock",
            description: "The Analog Clock app is a timeless classic reimagined for the digital age. With its elegant design and smooth functionality, it brings the beauty of traditional timekeeping to your device's screen. Watch as the hands gracefully glide around the dial, providing you with an instant visual representation of the current time. Perfect for both practical use and aesthetic appeal, the Analog Clock app adds a touch of sophistication to any digital workspace or home screen. Whether you're tracking the hours at a glance or simply appreciating the artistry of its design, this app is a must-have for anyone who values the elegance of analog timepieces.",
            link: "https://ananddwivedi0606.github.io/Analog_Clock_Javascript/",
            img: "./assets/png/Project 3.png",

        },
        {
            no: 4,
            title: "Furniture Website",
            description: "Welcome to our Furniture Website, your premier destination for exquisite home furnishings and decor. Explore our curated collection of high-quality furniture pieces, designed to elevate any living space with style and functionality. From luxurious sofas and cozy armchairs to elegant dining sets and chic accessories, we offer a diverse range of options to suit every taste and lifestyle. Whether you're furnishing a cozy apartment, a sprawling family home, or a trendy office space, our website provides a seamless shopping experience with easy navigation and detailed product descriptions. With our commitment to superior craftsmanship and customer satisfaction, we strive to make your furniture shopping experience both inspiring and enjoyable. Discover the perfect pieces to transform your space into a haven of comfort and elegance, only at our Furniture Website.",
            link: "https://ananddwivedifurnitureweb.netlify.app/",
            img: "./assets/png/Project 4.png",

        },
    ]


    return (
        <>
            <section id="projects" className="projects sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-bg">
                        <span className="heading-sec__main">Projects</span>
                        <span className="heading-sec__sub">
                            Here you will find some of the personal and clients projects that
                            I created with each project containing its own case study
                        </span>
                    </h2>

                    <div className="projects__content">
                        {
                            data.map((item, index) => {
                                return <ProjectList key={index}
                                    no={item.no}
                                    title={item.title}
                                    des={item.description}
                                    link={item.link}
                                    img={item.img}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

