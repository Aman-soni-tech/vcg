import { useState } from 'react';
import { Plus, Search, Trash2, LogOut } from 'lucide-react';

interface Result {
  id: string;
  studentName: string;
  studentId: string;
  course: string;
  marks: number;
  date: string;
  status: 'Pass' | 'Fail';
}

interface ResultsProps {
  onBackClick: () => void;
  isAdmin: boolean;
  onLogout: () => void;
}

export function Results({ onBackClick, isAdmin, onLogout }: ResultsProps) {
  const [results, setResults] = useState<Result[]>([
    {
      id: '1',
      studentName: 'Rahul Kumar',
      studentId: 'VCG001',
      course: 'Core Java',
      marks: 85,
      date: '2026-02-15',
      status: 'Pass'
    },
    {
      id: '2',
      studentName: 'Priya Singh',
      studentId: 'VCG002',
      course: 'DSA',
      marks: 92,
      date: '2026-02-15',
      status: 'Pass'
    },
    {
      id: '3',
      studentName: 'Rajesh Patel',
      studentId: 'VCG003',
      course: 'SpringBoot',
      marks: 78,
      date: '2026-02-14',
      status: 'Pass'
    },
    {
      id: '4',
      studentName: 'Ananya Verma',
      studentId: 'VCG004',
      course: 'MySQL',
      marks: 88,
      date: '2026-02-14',
      status: 'Pass'
    },
  ]);

  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    course: '',
    marks: '',
    date: '',
  });

  const [searchFilter, setSearchFilter] = useState({
    name: '',
    id: '',
    course: ''
  });

  const handleAddResult = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.studentName || !formData.studentId || !formData.course || !formData.marks || !formData.date) {
      alert('Please fill all fields');
      return;
    }

    const marks = parseInt(formData.marks);
    const newResult: Result = {
      id: Date.now().toString(),
      studentName: formData.studentName,
      studentId: formData.studentId,
      course: formData.course,
      marks: marks,
      date: formData.date,
      status: marks >= 40 ? 'Pass' : 'Fail'
    };

    setResults([newResult, ...results]);
    setFormData({
      studentName: '',
      studentId: '',
      course: '',
      marks: '',
      date: ''
    });
  };

  const handleDeleteResult = (id: string) => {
    setResults(results.filter(result => result.id !== id));
  };

  const filteredResults = results.filter(result => {
    const matchName = result.studentName.toLowerCase().includes(searchFilter.name.toLowerCase());
    const matchId = result.studentId.toLowerCase().includes(searchFilter.id.toLowerCase());
    const matchCourse = result.course.toLowerCase().includes(searchFilter.course.toLowerCase());
    return matchName && matchId && matchCourse;
  });

  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-white px-4 md:px-0">
      <div className="container-custom">
        {/* Back and Logout Buttons */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold transition-colors text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          
          {isAdmin && (
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors text-sm md:text-base"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          )}
        </div>

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Results Portal</h1>
          <p className="text-gray-600 text-sm md:text-base">
            {isAdmin ? 'Admin Panel - Manage Student Results' : 'View Your Results'}
          </p>
        </div>

        {/* Admin Form */}
        {isAdmin && (
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl border border-primary-200 p-6 md:p-8 mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Plus className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Add New Result</h2>
            </div>

            <form onSubmit={handleAddResult} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Student Name</label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    placeholder="Enter student name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Student ID</label>
                  <input
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    placeholder="e.g., VCG001"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Course</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                  >
                    <option value="">Select course</option>
                    <option value="C/C++">C/C++</option>
                    <option value="Core Java">Core Java</option>
                    <option value="Advanced Java">Advanced Java</option>
                    <option value="Collection Framework">Collection Framework</option>
                    <option value="Multithreading">Multithreading</option>
                    <option value="DSA">DSA</option>
                    <option value="SpringBoot">SpringBoot</option>
                    <option value="MySQL">MySQL</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Marks (0-100)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.marks}
                    onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    placeholder="Enter marks"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 text-sm md:text-base"
              >
                <Plus className="w-4 h-4 inline mr-2" />
                Add Result
              </button>
            </form>
          </div>
        )}

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Search & Filter</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Student Name</label>
              <input
                type="text"
                value={searchFilter.name}
                onChange={(e) => setSearchFilter({ ...searchFilter, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                placeholder="Search by name..."
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Student ID</label>
              <input
                type="text"
                value={searchFilter.id}
                onChange={(e) => setSearchFilter({ ...searchFilter, id: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                placeholder="Search by ID..."
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Course</label>
              <input
                type="text"
                value={searchFilter.course}
                onChange={(e) => setSearchFilter({ ...searchFilter, course: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                placeholder="Search by course..."
              />
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-primary text-white">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold">Student Name</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold">Student ID</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold">Course</th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold">Marks</th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold">Status</th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold">Date</th>
                  {isAdmin && <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-semibold">Action</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <tr key={result.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-900 font-medium">{result.studentName}</td>
                      <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">{result.studentId}</td>
                      <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">{result.course}</td>
                      <td className="px-4 md:px-6 py-4 text-sm md:text-base text-center">
                        <span className="font-bold text-primary-600">{result.marks}</span>
                        <span className="text-gray-500">/100</span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                          result.status === 'Pass'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {result.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700 text-center">{result.date}</td>
                      {isAdmin && (
                        <td className="px-4 md:px-6 py-4 text-center">
                          <button
                            onClick={() => handleDeleteResult(result.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                            title="Delete result"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={isAdmin ? 7 : 6} className="px-4 md:px-6 py-8 text-center text-gray-500">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Results Summary */}
        {filteredResults.length > 0 && (
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl p-4 border border-primary-200">
              <p className="text-gray-600 text-xs md:text-sm font-semibold mb-1">Total Results</p>
              <p className="text-2xl md:text-3xl font-bold text-primary-700">{filteredResults.length}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <p className="text-gray-600 text-xs md:text-sm font-semibold mb-1">Passed</p>
              <p className="text-2xl md:text-3xl font-bold text-green-700">
                {filteredResults.filter(r => r.status === 'Pass').length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-200">
              <p className="text-gray-600 text-xs md:text-sm font-semibold mb-1">Failed</p>
              <p className="text-2xl md:text-3xl font-bold text-red-700">
                {filteredResults.filter(r => r.status === 'Fail').length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
              <p className="text-gray-600 text-xs md:text-sm font-semibold mb-1">Avg Marks</p>
              <p className="text-2xl md:text-3xl font-bold text-orange-700">
                {(filteredResults.reduce((sum, r) => sum + r.marks, 0) / filteredResults.length).toFixed(1)}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
