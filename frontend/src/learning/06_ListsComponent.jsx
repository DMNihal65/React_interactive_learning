import React, { useState } from 'react';

/**
 * ListsComponent - Demonstrates rendering lists and conditional rendering
 */
function ListsComponent() {
  // Sample task data with different statuses
  const initialTasks = [
    { id: 1, title: 'Learn React Basics', status: 'completed', priority: 'high' },
    { id: 2, title: 'Master Components', status: 'completed', priority: 'high' },
    { id: 3, title: 'Understand Props', status: 'completed', priority: 'medium' },
    { id: 4, title: 'Work with State', status: 'in-progress', priority: 'high' },
    { id: 5, title: 'Handle Events', status: 'in-progress', priority: 'medium' },
    { id: 6, title: 'Implement Effects', status: 'planned', priority: 'medium' },
    { id: 7, title: 'Create Custom Hooks', status: 'planned', priority: 'low' },
    { id: 8, title: 'Build a Project', status: 'planned', priority: 'high' },
  ];
  
  // State to store tasks
  const [tasks, setTasks] = useState(initialTasks);
  
  // State to store filter settings
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: ''
  });
  
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  // Apply filters to tasks
  const filteredTasks = tasks.filter(task => {
    // Filter by status
    if (filters.status !== 'all' && task.status !== filters.status) {
      return false;
    }
    
    // Filter by priority
    if (filters.priority !== 'all' && task.priority !== filters.priority) {
      return false;
    }
    
    // Filter by search text
    if (filters.search && !task.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Toggle task status
  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        // Cycle through statuses: completed -> in-progress -> planned -> completed
        let newStatus;
        
        switch (task.status) {
          case 'completed':
            newStatus = 'in-progress';
            break;
          case 'in-progress':
            newStatus = 'planned';
            break;
          default:
            newStatus = 'completed';
        }
        
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };
  
  // Helper function to get the appropriate status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completed</span>;
      case 'in-progress':
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">In Progress</span>;
      case 'planned':
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Planned</span>;
      default:
        return null;
    }
  };
  
  // Helper function to get priority indicator
  const getPriorityIndicator = (priority) => {
    switch (priority) {
      case 'high':
        return <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2" title="High Priority"></span>;
      case 'medium':
        return <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2" title="Medium Priority"></span>;
      case 'low':
        return <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2" title="Low Priority"></span>;
      default:
        return null;
    }
  };
  
  // Get counts for summary
  const getTaskCounts = () => {
    return {
      total: tasks.length,
      completed: tasks.filter(task => task.status === 'completed').length,
      inProgress: tasks.filter(task => task.status === 'in-progress').length,
      planned: tasks.filter(task => task.status === 'planned').length
    };
  };
  
  const counts = getTaskCounts();
  
  return (
    <div className="max-w-lg mx-auto">
      <h3 className="text-xl font-semibold mb-4">Task Tracker</h3>
      
      {/* Filter Controls */}
      <div className="mb-4 p-4 bg-gray-50 rounded space-y-2">
        <div className="flex flex-wrap gap-2">
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              name="status" 
              value={filters.status} 
              onChange={handleFilterChange}
              className="w-full rounded border-gray-300 shadow-sm p-2 text-sm"
            >
              <option value="all">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="planned">Planned</option>
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select 
              name="priority" 
              value={filters.priority} 
              onChange={handleFilterChange}
              className="w-full rounded border-gray-300 shadow-sm p-2 text-sm"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input 
            type="text" 
            name="search" 
            value={filters.search} 
            onChange={handleFilterChange}
            placeholder="Search tasks..."
            className="w-full rounded border-gray-300 shadow-sm p-2 text-sm"
          />
        </div>
      </div>
      
      {/* Task Summary */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="bg-white p-2 text-center rounded shadow-sm">
          <div className="text-lg font-bold">{counts.total}</div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
        <div className="bg-green-50 p-2 text-center rounded shadow-sm">
          <div className="text-lg font-bold text-green-700">{counts.completed}</div>
          <div className="text-xs text-gray-500">Completed</div>
        </div>
        <div className="bg-blue-50 p-2 text-center rounded shadow-sm">
          <div className="text-lg font-bold text-blue-700">{counts.inProgress}</div>
          <div className="text-xs text-gray-500">In Progress</div>
        </div>
        <div className="bg-gray-50 p-2 text-center rounded shadow-sm">
          <div className="text-lg font-bold text-gray-700">{counts.planned}</div>
          <div className="text-xs text-gray-500">Planned</div>
        </div>
      </div>
      
      {/* Task List */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        {filteredTasks.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No tasks match your filters. Try adjusting your search criteria.
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredTasks.map(task => (
              <li 
                key={task.id} 
                className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => toggleTaskStatus(task.id)}
              >
                <div className="flex items-center">
                  {getPriorityIndicator(task.priority)}
                  <span className={task.status === 'completed' ? 'line-through text-gray-500' : ''}>
                    {task.title}
                  </span>
                </div>
                <div className="mt-1 flex justify-between">
                  <div>
                    {getStatusBadge(task.status)}
                  </div>
                  <div className="text-xs text-gray-500">
                    Task #{task.id}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Info section */}
      <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
        <p className="font-semibold mb-1">This component demonstrates:</p>
        <ul className="list-disc list-inside pl-2 space-y-1">
          <li>Rendering lists with the <code>map()</code> method</li>
          <li>Using <code>key</code> prop for list items</li>
          <li>Conditional rendering with <code>&&</code> and ternary operators</li>
          <li>Filtering and transforming data</li>
          <li>Dynamic styling based on data</li>
          <li>Handling empty states</li>
        </ul>
        <p className="mt-2 text-blue-700">Tip: Click on a task to cycle through statuses</p>
      </div>
    </div>
  );
}

export default ListsComponent; 