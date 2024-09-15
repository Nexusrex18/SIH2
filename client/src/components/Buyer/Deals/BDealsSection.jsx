import { IoChatbubblesSharp } from 'react-icons/io5';
import { FaLeaf } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BDealsSection({ deal }) {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex gap-6">
      {/* Icon Section */}
      <div className="bg-green-100 p-4 rounded-full">
        <FaLeaf className="text-green-500 text-3xl" />
      </div>

      {/* Details Section */}
      <div className="flex-grow grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <h2 className="font-bold text-xl text-gray-800 mb-2">
            {deal.cropName}
          </h2>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">
              <strong>{t('farmers_name')}:</strong>
            </span>{' '}
            {deal.name}
          </p>
        </div>
        <div className="w-full flex ">
          <div className="w-full">
            <p className="text-gray-600 mb-1">
              <span className="font-medium">
                <strong> {t('quantity')}:</strong>
              </span>{' '}
              {deal.quantity} kg
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">
                <strong> {t('land_area')}:</strong>
              </span>{' '}
              {deal.landArea} sq.ft
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">
                <strong> {t('price')}:</strong>
              </span>{' '}
              ₹{deal.price} per kg
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">
                <strong> {t('items')}:</strong>
              </span>{' '}
              {deal.items}
            </p>
          </div>

          {/* Column 3: Items, Location, Pincode, State */}
          <div className="w-full">
            <p className="text-gray-600 mb-1">
              <span className="font-medium">
                <strong> {t('location')}:</strong>
              </span>{' '}
              {deal.location}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">
                <strong> {t('pincode')}:</strong>
              </span>{' '}
              {deal.pincode}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">
                <strong> {t('state')}:</strong>
              </span>{' '}
              {deal.state}
            </p>
          </div>
        </div>
      </div>
      {/* CTA Button */}
      <div className=" items-end">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2 hover:bg-green-600"
          onClick={() => {
            navigate('/chat',{
              state: { uid: deal.id, userType: 'buyers' }, 
          })
        }}
        >
          <IoChatbubblesSharp />
          {t('negotiate')}

        </button>
      </div>
    </div>
  );
}

// PropTypes for data validation
BDealsSection.propTypes = {
  deal: PropTypes.shape({
    cropName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    landArea: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    items: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    pincode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
