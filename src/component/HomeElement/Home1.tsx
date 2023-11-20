import Layout from "../Layout/Layout";
import About from "./About";
import Category from "./Category";
import Contact from "./Contact";
import Hero from "./Hero";
import Team from "./Team";
import Why from "./Why";

export default function Home1(){
    return (
        <>
        <Layout Tipe="fixed">
        <Hero/>
        <About/>
        <Category/>
        <Why/>
        <Team/>
        <Contact/>
        </Layout>
        </>
    );
}