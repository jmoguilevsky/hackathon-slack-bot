import * as express from 'express';
import * as path from 'path';
import * as OAS from 'express-openapi-validator';

const router = express.Router();

const apiSpec = path.join(__dirname, '../../apiSpec.yaml'); // TODO file location
router.use('/spec', express.static(apiSpec));
router.use(OAS.middleware({ apiSpec }));

router.get('/', (req, res) => res.send('Hello world!\n'));

router.post('/', async (req, res) => {
  console.log(req.body);
  res.json({ok: 'OK'});
  // const response = await service.process(req);
  // res.send(response);
});

export default router;
