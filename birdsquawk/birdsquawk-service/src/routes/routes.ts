import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/birdsquawk/get', (req: Request, res: Response) => {
  console.log('get birdsquawk');
});

router.post('/api/birdsquawk/post', (req: Request, res: Response) => {
  console.log('post birdsquawk');
});

export { router };
