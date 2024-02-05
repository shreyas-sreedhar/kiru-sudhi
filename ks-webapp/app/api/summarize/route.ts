import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';

type Data = {
  summary?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Extract the URL from the request body
    const { url } = req.body;
    
    // Validate the URL
    if (typeof url !== 'string') {
      res.status(400).json({ error: 'URL must be a string' });
      return;
    }
    
    // The path to the Python script should be relative to the current file
    // Adjust the path as necessary
    const pythonProcess = spawn('python', ['./test.py', url]);

    let dataString = '';
    pythonProcess.stdout.on('data', (data: Buffer) => {
      dataString += data.toString();
    });

    pythonProcess.stderr.on('data', (data: Buffer) => {
      console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code: number) => {
      if (code === 0) {
        res.status(200).json({ summary: dataString });
      } else {
        res.status(500).json({ error: "An error occurred while summarizing the article." });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
