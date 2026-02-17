import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for demo requests
let demoRequests: any[] = [];
let nextId = 1;

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    storageType: 'in-memory',
    totalSubmissions: demoRequests.length
  });
});

// Submit demo request
app.post('/api/demo-request', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, course_interest, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and phone are required',
      });
    }

    // Create record in memory
    const newRequest = {
      id: nextId++,
      name,
      email,
      phone,
      course_interest: course_interest || null,
      message: message || null,
      created_at: new Date().toISOString(),
    };

    demoRequests.push(newRequest);

    console.log(`✓ Demo request received from ${name} (${email})`);
    console.log(`✓ Total submissions: ${demoRequests.length}`);

    res.json({
      success: true,
      message: 'Demo request submitted successfully',
      data: newRequest,
    });
  } catch (error) {
    console.error('Error submitting demo request:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
});

// Get all demo requests
app.get('/api/demo-requests', async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      count: demoRequests.length,
      data: demoRequests.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ),
    });
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
});

// Get demo request by ID
app.get('/api/demo-requests/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const request = demoRequests.find(r => r.id === parseInt(id));
    
    if (!request) {
      return res.status(404).json({
        success: false,
        error: 'Demo request not found',
      });
    }
    
    res.json({
      success: true,
      data: request,
    });
  } catch (error) {
    console.error('Error fetching demo request:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
});

// Delete demo request
app.delete('/api/demo-requests/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const index = demoRequests.findIndex(r => r.id === parseInt(id));
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Demo request not found',
      });
    }
    
    const deleted = demoRequests.splice(index, 1);
    
    res.json({
      success: true,
      message: 'Demo request deleted',
      data: deleted[0],
    });
  } catch (error) {
    console.error('Error deleting demo request:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
});

// Clear all submissions
app.delete('/api/demo-requests', async (req: Request, res: Response) => {
  try {
    const count = demoRequests.length;
    demoRequests = [];
    
    res.json({
      success: true,
      message: `Cleared ${count} demo requests`,
      cleared: count,
    });
  } catch (error) {
    console.error('Error clearing submissions:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`\n✨ Server running on http://localhost:${PORT}`);
  console.log(`📝 In-memory storage mode (data persists until server restart)\n`);
});
