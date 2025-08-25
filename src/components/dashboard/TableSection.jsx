import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  // Демонстрационные данные
  const orders = [
    { id: "#12345", customer: "John Doe", product: "iPhone 15", amount: "$999", status: "completed", date: "Aug 25, 2025" },
    { id: "#12346", customer: "Jane Smith", product: "MacBook Pro", amount: "$1999", status: "pending", date: "Aug 20, 2025" },
    { id: "#12347", customer: "Bob Lee", product: "AirPods Pro", amount: "$249", status: "cancelled", date: "Aug 15, 2025" },
  ];

  return (
    <div className='space-y-6'>
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>

        {/* Заголовок секции */}
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Orders</h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>Latest customer orders</p>
            </div>
            <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
              View All
            </button>
          </div>
        </div>

        {/* Таблица */}
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-slate-100 dark:bg-slate-800'>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Order ID</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Customer</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Product</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Amount</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Status</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Date</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className='border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                  <td className='p-4 text-sm font-medium text-slate-800 dark:text-white'>{order.id}</td>
                  <td className='p-4 text-sm font-medium text-slate-800 dark:text-white'>{order.customer}</td>
                  <td className='p-4 text-sm font-medium text-slate-800 dark:text-white'>{order.product}</td>
                  <td className='p-4 text-sm font-medium text-slate-800 dark:text-white'>{order.amount}</td>
                  <td className='p-4'>
                    <span className={`${getStatusColor(order.status)} font-medium text-xs px-3 py-1 rounded-full capitalize`}>
                      {order.status}
                    </span>
                  </td>
                  <td className='p-4 text-sm font-medium text-slate-800 dark:text-white'>{order.date}</td>
                  <td className='p-4'>
                    <button className='text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'>
                      <MoreHorizontal className='w-4 h-4' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>


      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden '>
      <div className='p-6 border-slate-200/50 dark:border-slate-700/50'>
      <div className='flex items-center justify-between'>
        <div>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Top Products</h3>
            
        </div>
        <p className='text-sm text-slate-500 dark:text-slate-400 '>
              Best performing products
        </p>

      </div>

      <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All</button>

      </div>

      <div className='p-6 space-y-4 '>
        <div className='flex items-center justify-between p-4  rounded-xl  hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
        <div className='flex-1 '>
            <h4 className='text-sm  font-semibold text-slate-800 dark:text-white  '>
                Product Name
            </h4>
            <p className='text-xs text-slate-500 dark:text-slate-400'>Product Sales</p>

        </div>

        <div className='text-right'>

        </div>

        </div>
      </div>

      </div>
    </div>
  )
}

export default TableSection
