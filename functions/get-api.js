import "dotenv/config";

exports.handler = async (event, context) => {
  try {
    const secret = process.env.OPEN_WEATHER_KEY;
    return {
      statusCode: 200,
      body: JSON.stringify({ secret }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
