import Head from 'next/head';

function MyHead() {
    return (
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap"
                rel="stylesheet"
            />
            <title>Gen Password</title>
            <meta name="description" content="Generate a random password" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default MyHead;