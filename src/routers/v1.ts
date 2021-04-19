import * as express from 'express';
import * as path from 'path';
import * as OAS from 'express-openapi-validator';

const router = express.Router();

// const apiSpec = path.join(__dirname, '../../apiSpec.yaml'); // TODO file location
// router.use('/spec', express.static(apiSpec));
// router.use(OAS.middleware({ apiSpec }));

router.get('/', (req, res) => res.send('Hello world!\n'));

router.post('/', async (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 4));

  if(body.type === "url_verification") {
    res.json({challenge: body?.challenge || 'hardcoded-value'});
    return;
  }
  // const response = await service.process(req);
  // res.send(response);
});

export default router;
