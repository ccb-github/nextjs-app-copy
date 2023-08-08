// This function is the endpoint's request handler.
async function relatedSearchEndpoint({ _query, _headers, body}, response) {
  
  const bodyText = JSON.parse(body.text())
  console.log(bodyText)
  let { collectionName, fieldValue, fieldName } = bodyText
  if (fieldName===undefined) {
    fieldName = "_id"
  }
  //This is allowed : value undefined will output in that case
  console.log(collectionName, fieldName,`value ${fieldValue}`)
  
  //const queryUrl = `https://data.mongodb-api.com/app/application-qrcode-ukplu/endpoint/users?arg1=${arg1}&arg2=${arg2}${arg3 ? `&arg3=${arg3}`: ""}`;

  try {

    var doc= {};
    // Querying a mongodb service:

    
		const filter = fieldValue ? { fieldName: fieldValue } : {}
		console.log(JSON.stringify(filter))
		doc = await context.services
		        .get("mongodb-atlas")
		        .db("qrcodeTraceability")
						.collection(collectionName)
						.findOne({name: "Product a"})
						
		console.log(context.request.httpMethod)
		console.log(`Doc`, JSON.stringify(doc)) 
		setTimeout(() => {
      response.setStatusCode(201);
      // tip: You can also use EJSON.stringify instead of JSON.stringify.
      response.setBody(JSON.stringify(doc));
    },5000)
    
    response.setStatusCode(201);
    // tip: You can also use EJSON.stringify instead of JSON.stringify.
    response.setBody(JSON.stringify(doc));
    
    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.

  } catch (error) {
    response.setStatusCode(403);
    response.setBody(JSON.stringify(error.message));
  }
};
