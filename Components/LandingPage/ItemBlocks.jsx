import React from 'react'

const Dummy_Blocks = [
    {
        id: '1',
        url: 'https://images.unsplash.com/photo-1673026147367-245acae031fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Small Gifts Under $200'
    },
    {
        id: '2',
        url: 'https://images.unsplash.com/photo-1672990687937-1e9b3446f678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        title: 'Easy Returns'
    },
    {
        id: '3',
        url: 'https://images.unsplash.com/photo-1673021714226-8bea662f22dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Small Gifts Under $200'
    },
    {
        id: '4',
        url: 'https://images.unsplash.com/photo-1673026147367-245acae031fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Small Gifts Under $200'
    },
    {
        id: '5',
        url: 'https://images.unsplash.com/photo-1673026147367-245acae031fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Gaming Accessories'
    },
    {
        id: '6',
        url: 'https://images.unsplash.com/photo-1673021714226-8bea662f22dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Shop By Category'
    },
    {
        id: '7',
        url: 'https://images.unsplash.com/photo-1673021714226-8bea662f22dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Electronics'
    },
    {
        id: '8',
        url: 'https://images.unsplash.com/photo-1672990687937-1e9b3446f678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        title: 'Small Gifts Under $200'
    },
]

function ItemBlocks() {
    return (
        <>
            <div className='grid grid-cols-4 space-x-4 pt-48 '>
                {Dummy_Blocks.map(({id,url , title}) => (
                    <div key={id} className={`w-80 px-7 py-6 bg-white items-baseline`}>
                        <h1 className='text-xl font-semibold'>{title}</h1>
                        <img src={url} alt="" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemBlocks