import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Helloooo!');
});

export { router as signinRouter };
