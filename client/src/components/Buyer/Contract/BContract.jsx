import { useState } from 'react';
import GenerateContract from './GenerateContract';
import ContractList from './ContractList';
import { useTranslation } from 'react-i18next';

export default function BContract() {
  const { t } = useTranslation(); // Initialize translation function

  const [choice, setChoice] = useState('generate');
  return (
    <div className="w-full flex self-start gap-4 p-4">
      <div className="w-1/5 bg-white rounded-4 shadow p-4">
        <div className="space-y-4 flex flex-col self-start items-start">
          <div
            className={`p-3 text-gray-700 rounded-lg flex items-center cursor-pointer space-x-2 ${choice === 'generate' ? 'bg-green-200 font-bold' : ''}`}
            onClick={() => {
              setChoice('generate');
            }}
          >
            <span>{t('generate_contract')}</span>
          </div>
          <div
            className={`p-3 text-gray-700 rounded-lg flex items-center cursor-pointer space-x-2 ${choice === 'status' ? 'bg-green-200 font-bold' : ''}`}
            onClick={() => {
              setChoice('status');
            }}
          >
            <span>{t('contract_status')}</span>
          </div>
        </div>
      </div>

      {choice === 'generate' && <GenerateContract />}
      {choice === 'status' && <ContractList />}
    </div>
  );
}
