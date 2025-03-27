import React, { useState } from 'react';

/**
 * A set of UI components that demonstrate composition patterns in React
 */

// Card component - a simple container with flexible content
function Card({ title, children, footer, className = '', variant = 'default' }) {
  // Different style variants
  const variantStyles = {
    default: 'bg-white border-gray-200',
    primary: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    danger: 'bg-red-50 border-red-200',
  };
  
  const baseStyles = 'border rounded-lg overflow-hidden shadow-sm';
  const cardStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  return (
    <div className={cardStyles}>
      {title && (
        <div className="px-4 py-3 border-b border-inherit bg-opacity-50 font-medium">
          {title}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
      {footer && (
        <div className="px-4 py-3 border-t border-inherit bg-opacity-50">
          {footer}
        </div>
      )}
    </div>
  );
}

// Button component - reusable with different sizes and variants
function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
  ...props 
}) {
  // Different style variants
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700',
  };
  
  // Different size variants
  const sizeStyles = {
    sm: 'text-sm px-2 py-1',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const baseStyles = 'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

// Alert component - for displaying messages with different severities
function Alert({ children, variant = 'info', dismissible = false, className = '' }) {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  // Different style variants
  const variantStyles = {
    info: 'bg-blue-100 border-blue-200 text-blue-800',
    success: 'bg-green-100 border-green-200 text-green-800',
    warning: 'bg-yellow-100 border-yellow-200 text-yellow-800',
    error: 'bg-red-100 border-red-200 text-red-800',
  };
  
  const baseStyles = 'border p-4 rounded';
  const alertStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  return (
    <div className={alertStyles} role="alert">
      <div className="flex items-start justify-between">
        <div className="flex-1">{children}</div>
        {dismissible && (
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-4 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

// Panel component with tabs for organizing content
function Panel({ children, className = '' }) {
  return (
    <div className={`border rounded-lg overflow-hidden bg-white ${className}`}>
      {children}
    </div>
  );
}

// Tab components for Panel
function PanelTabs({ children }) {
  return (
    <div className="flex border-b">
      {children}
    </div>
  );
}

function PanelTab({ children, isActive, onClick }) {
  return (
    <button
      className={`px-4 py-2 font-medium ${
        isActive 
          ? 'text-blue-600 border-b-2 border-blue-500' 
          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PanelBody({ children }) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}

// Main Demo Component
function CompositionComponent() {
  // State for demo interaction
  const [activeTab, setActiveTab] = useState('info');
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Handle form submission demo
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Component Composition Demo</h3>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card 
          title="Simple Card"
          footer="Card Footer"
          variant="default"
        >
          <p>This is a basic card with a title and footer.</p>
        </Card>
        
        <Card
          title="Card with Buttons"
          variant="primary"
          footer={
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Save</Button>
            </div>
          }
        >
          <p>Cards can have complex content and custom footers with buttons.</p>
        </Card>
      </div>
      
      {/* Alert Section */}
      <div className="space-y-2">
        {showSuccess && (
          <Alert variant="success" dismissible>
            <strong>Success!</strong> Your changes have been saved.
          </Alert>
        )}
        
        <Alert variant="info">
          <strong>Info:</strong> This is an informational message.
        </Alert>
        
        <Alert variant="warning" dismissible>
          <strong>Warning:</strong> This action cannot be undone.
        </Alert>
      </div>
      
      {/* Panel with Tabs */}
      <Panel>
        <PanelTabs>
          <PanelTab 
            isActive={activeTab === 'info'} 
            onClick={() => setActiveTab('info')}
          >
            Information
          </PanelTab>
          <PanelTab 
            isActive={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </PanelTab>
          <PanelTab 
            isActive={activeTab === 'history'} 
            onClick={() => setActiveTab('history')}
          >
            History
          </PanelTab>
        </PanelTabs>
        
        <PanelBody>
          {activeTab === 'info' && (
            <div>
              <h4 className="font-medium mb-2">Product Information</h4>
              <p>This tab shows product information. Click other tabs to see different content.</p>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div>
              <h4 className="font-medium mb-2">Settings</h4>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm mb-1">Display Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    defaultValue="React Learner"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Notifications</label>
                  <select className="w-full p-2 border rounded">
                    <option>All notifications</option>
                    <option>Important only</option>
                    <option>None</option>
                  </select>
                </div>
                <div className="pt-2">
                  <Button type="submit">Save Settings</Button>
                </div>
              </form>
            </div>
          )}
          
          {activeTab === 'history' && (
            <div>
              <h4 className="font-medium mb-2">History</h4>
              <ul className="divide-y">
                <li className="py-2">Changed display name (2 days ago)</li>
                <li className="py-2">Updated profile picture (5 days ago)</li>
                <li className="py-2">Account created (2 weeks ago)</li>
              </ul>
            </div>
          )}
        </PanelBody>
      </Panel>
      
      {/* Button Showcase */}
      <Card title="Button Variants">
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button disabled>Disabled</Button>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">Button Sizes</h4>
          <div className="flex items-center gap-2">
            <Button size="sm">Small</Button>
            <Button>Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </Card>
      
      {/* Info Box */}
      <div className="bg-blue-50 p-4 rounded text-sm">
        <p className="font-semibold mb-1">This component demonstrates:</p>
        <ul className="list-disc list-inside pl-2 space-y-1">
          <li><strong>Component Composition</strong> - Building complex UIs from smaller parts</li>
          <li><strong>Children Prop</strong> - Passing content between component tags</li>
          <li><strong>Prop Spreading</strong> - Using <code>...props</code> to pass additional props</li>
          <li><strong>Compound Components</strong> - Related components that work together (Panel example)</li>
          <li><strong>Conditional Rendering</strong> - Showing different content based on state</li>
          <li><strong>Prop Defaults</strong> - Setting default values for props</li>
        </ul>
      </div>
    </div>
  );
}

export default CompositionComponent; 