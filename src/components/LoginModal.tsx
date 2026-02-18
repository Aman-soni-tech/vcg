import { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (isAdmin: boolean) => void;
}

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        setSuccessMessage('✓ Successfully logged in as Admin');
        setShowSuccess(true);
        setTimeout(() => {
          onLoginSuccess(true);
          setUsername('');
          setPassword('');
          onClose();
        }, 1500);
      } else {
        // Login as student
        setSuccessMessage('✓ Successfully logged in');
        setShowSuccess(true);
        setTimeout(() => {
          onLoginSuccess(false);
          setUsername('');
          setPassword('');
          onClose();
        }, 1500);
      }
      setIsLoading(false);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md my-4 md:my-8 animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Results Portal Login</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col">
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="Enter username"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs md:text-sm">
                {error}
              </div>
            )}

            {showSuccess && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 text-sm md:text-base font-semibold">{successMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || showSuccess}
              className="btn-primary w-full py-3 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}
