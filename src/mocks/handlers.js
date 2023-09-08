import { startOfToday } from "date-fns";
import { rest } from "msw";

const createGetRequest = (
  url,
  mockedResponse,
  options = { delay: 0 }
) => {
    let baseUrl = `${process.env.VITE_API_BASE_URL}${url}`
  return rest.get(baseUrl, (req, res, ctx) => {
    let response = mockedResponse;
    if (!response)
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: `Response' not found`,
        })
      );
    return res(ctx.delay(options.delay), ctx.json(response));
  });
};

export default [
    createGetRequest('/demo1',{
        timestamp: startOfToday(),
        message: "Agya msg"
    })
]
