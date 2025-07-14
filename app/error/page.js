import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
import Link from "next/link"
export default function error() {


    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
            
            <section className="error-section centred pt_160 pb_160">
                <div className="auto-container">
                    <div className="content-box p_relative pt_200">
                        <div className="shape" style={{ backgroundImage: "url(assets/images/icons/error-1.png)" }}></div>
                        <h1>404</h1>
                        <p>This page doesn’t exist or was removed! <br />We suggest you go back to home.</p>
                        <Link href="/" className="theme-btn btn-one">Back to Homepage</Link>
                    </div>
                </div>
            </section>

            <Subscribe/>
            
            </Layout>
        </>
    )
}