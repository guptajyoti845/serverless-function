exports.handler = async (event, context, callback) =>{
    console.log(event)
    callback(null, {
        statusCode: 200,
        body: 'Our first Netlify function example',
    })
    // return {
    //     statusCode: 200,
    //     body: 'Our first Netlify function example',
    // }

}
