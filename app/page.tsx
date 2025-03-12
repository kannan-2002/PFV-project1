import TransactionList from '@/components/TransactionList';
import TransactionForm from '@/components/TransactionForm';
import ExpensesChart from '@/components/ExpensesChart';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Personal Finance Tracker</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <TransactionForm />
          <TransactionList />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <ExpensesChart />
        </div>
      </div>
    </div>
  );
}