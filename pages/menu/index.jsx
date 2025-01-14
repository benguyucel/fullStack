import React from 'react'
import MenuWrapper from "../../components/product/MenuWrappaer"
import axios from 'axios'

const Index = ({ categoryList }) => {
    return (
        <div className='pt-10'>
            <MenuWrapper categoryList={categoryList} />
        </div>
    )
}

export default Index


export const getServerSideProps = async () => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)

    return {
        props: {
            categoryList: res.data ? res.data : [],
        }
    }
}