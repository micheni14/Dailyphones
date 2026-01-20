import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";

const regions = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Malindi",
  "Kitale",
  "Garissa",
  "Kakamega",
  "Other"
];

const purchaseTimelines = [
  "Immediately",
  "Within 1 week",
  "Within 2 weeks",
  "Within 1 month",
  "Just browsing"
];

interface LocationState {
  productId: string;
  storage: string;
  color: string;
}

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get product details from navigation state
  const state = location.state as LocationState | undefined;
  const { productId, storage, color } = state || { productId: '', storage: '', color: '' };
  
  // Find the product
  const product = products.find(p => p.id === productId);
  
  // Form state
  interface FormData {
    name: string;
    phone: string;
    idNumber: string;
    region: string;
    purchaseTimeline: string;
    referralCode: string;
    nextOfKinName: string;
    nextOfKinId: string;
    nextOfKinPhone: string;
    mpesaStatement: File | null;
    mpesaPassword: string;
    idFront: File | null;
    idBack: File | null;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    idNumber: "",
    region: "",
    purchaseTimeline: "",
    referralCode: "",
    nextOfKinName: "",
    nextOfKinId: "",
    nextOfKinPhone: "",
    mpesaStatement: null,
    mpesaPassword: "",
    idFront: null,
    idBack: null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);

  if (!product || !storage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Request</h1>
          <p className="text-gray-600 mb-6">Please select a product first</p>
          <button 
            onClick={() => navigate('/products')}
            className="text-blue-600 hover:underline"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    );
  }

  const pricing = product.pricing[storage as keyof typeof product.pricing];

  if (!pricing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Request</h1>
          <p className="text-gray-600 mb-6">Please select a valid storage option</p>
          <button 
            onClick={() => navigate('/products')}
            className="text-blue-600 hover:underline"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: "" }));
      }
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^(\+254|0)[17]\d{8}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid Kenyan phone number";
      }
      if (!formData.idNumber.trim()) newErrors.idNumber = "ID number is required";
      else if (!/^\d{7,8}$/.test(formData.idNumber)) {
        newErrors.idNumber = "Enter a valid ID number (7-8 digits)";
      }
      if (!formData.region) newErrors.region = "Please select your region";
      if (!formData.purchaseTimeline) newErrors.purchaseTimeline = "Please select a timeline";
    }

    if (step === 2) {
      if (!formData.nextOfKinName.trim()) newErrors.nextOfKinName = "Next of kin name is required";
      if (!formData.nextOfKinId.trim()) newErrors.nextOfKinId = "Next of kin ID is required";
      else if (!/^\d{7,8}$/.test(formData.nextOfKinId)) {
        newErrors.nextOfKinId = "Enter a valid ID number (7-8 digits)";
      }
      if (!formData.nextOfKinPhone.trim()) newErrors.nextOfKinPhone = "Next of kin phone is required";
      else if (!/^(\+254|0)[17]\d{8}$/.test(formData.nextOfKinPhone)) {
        newErrors.nextOfKinPhone = "Enter a valid Kenyan phone number";
      }
    }

    if (step === 3) {
      if (!formData.mpesaStatement) newErrors.mpesaStatement = "M-PESA statement is required";
      if (!formData.mpesaPassword.trim()) newErrors.mpesaPassword = "M-PESA password is required";
      if (!formData.idFront) newErrors.idFront = "ID front photo is required";
      if (!formData.idBack) newErrors.idBack = "ID back photo is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Here you would submit the form data to your backend
      console.log("Form submitted:", formData);
      alert("Application submitted successfully! Our team will contact you shortly.");
      navigate('/');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-20 h-1 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-32 mt-2 text-sm">
              <span className={currentStep >= 1 ? 'text-blue-600 font-semibold' : 'text-gray-500'}>
                Personal Info
              </span>
              <span className={currentStep >= 2 ? 'text-blue-600 font-semibold' : 'text-gray-500'}>
                Next of Kin
              </span>
              <span className={currentStep >= 3 ? 'text-blue-600 font-semibold' : 'text-gray-500'}>
                Documents
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Product Summary */}
            <div className="lg:col-span-1">
              <div className="bg-linear-to-br from-blue-50 to-orange-50 rounded-2xl p-6 sticky top-6">
                <div className="bg-white rounded-xl p-4 mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-48 object-contain"
                  />
                </div>
                
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {product.condition} / {storage} / {color}
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold mb-3 text-gray-900">Deposit (1 week included)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Standard:</span>
                        <strong className="text-gray-900">Ksh {pricing.deposit.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saver:</span>
                        <strong className="text-green-600">
                          Ksh {Math.round(pricing.deposit * 0.9).toLocaleString()}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold mb-2">Weekly Payment</h3>
                    <p className="text-2xl font-bold text-blue-600">
                      Ksh {pricing.weekly.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">for 6 months</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-sm text-gray-600">
                    <div className="flex justify-between mb-1">
                      <span>Total Price:</span>
                      <span className="font-semibold">Ksh {pricing.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>You Save:</span>
                      <span className="font-semibold">Ksh {pricing.savings.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h1 className="text-2xl font-bold mb-2">
                  Please submit your contact details to start the process for lipa pole pole.
                </h1>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-bold mb-4 text-lg">
                    To help us verify your eligibility, please have the following ready:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>A <strong>12-month M-PESA statement</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>The <strong>password</strong> used to open your M-PESA statement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>A <strong>clear photo of your ID</strong> (both front and back)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Next of Kin details</strong> – their <strong>ID number</strong> and <strong>phone number</strong></span>
                    </li>
                  </ul>

                  <div className="bg-blue-100 border-l-4 border-blue-600 rounded p-4 mt-6">
                    <h4 className="font-bold text-blue-900 mb-2">Once you submit your details:</h4>
                    <ol className="space-y-2 text-gray-700 text-sm">
                      <li>1. Our team will give you a quick call to confirm your application.</li>
                      <li>2. We'll review your documents and complete a basic credit check.</li>
                      <li>3. Upon approval, we'll schedule delivery of your renewed device.</li>
                    </ol>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Personal Information</h2>
                      
                      <div>
                        <label className="block font-semibold mb-2">What's your name?</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">What's your phone number?</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                          placeholder="0712345678"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">ID Number?</label>
                        <input
                          type="text"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.idNumber ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                          placeholder="Enter your ID number"
                        />
                        {errors.idNumber && <p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">In which region are you?</label>
                        <select
                          name="region"
                          value={formData.region}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.region ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                        >
                          <option value="">Select Region</option>
                          {regions.map(region => (
                            <option key={region} value={region}>{region}</option>
                          ))}
                        </select>
                        {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">When do you want to buy?</label>
                        <select
                          name="purchaseTimeline"
                          value={formData.purchaseTimeline}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.purchaseTimeline ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                        >
                          <option value="">Select timeframe</option>
                          {purchaseTimelines.map(timeline => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                        {errors.purchaseTimeline && <p className="text-red-500 text-sm mt-1">{errors.purchaseTimeline}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">Referral code (optional)</label>
                        <input
                          type="text"
                          name="referralCode"
                          value={formData.referralCode}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none"
                          placeholder="Enter referral code"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Next of Kin Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Next of Kin Details</h2>
                      
                      <div>
                        <label className="block font-semibold mb-2">Next of Kin Name</label>
                        <input
                          type="text"
                          name="nextOfKinName"
                          value={formData.nextOfKinName}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.nextOfKinName ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                          placeholder="Enter next of kin full name"
                        />
                        {errors.nextOfKinName && <p className="text-red-500 text-sm mt-1">{errors.nextOfKinName}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">Next of Kin ID Number</label>
                        <input
                          type="text"
                          name="nextOfKinId"
                          value={formData.nextOfKinId}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.nextOfKinId ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                          placeholder="Enter next of kin ID number"
                        />
                        {errors.nextOfKinId && <p className="text-red-500 text-sm mt-1">{errors.nextOfKinId}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">Next of Kin Phone Number</label>
                        <input
                          type="tel"
                          name="nextOfKinPhone"
                          value={formData.nextOfKinPhone}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.nextOfKinPhone ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                          placeholder="0712345678"
                        />
                        {errors.nextOfKinPhone && <p className="text-red-500 text-sm mt-1">{errors.nextOfKinPhone}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Documents Upload */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Document Upload</h2>
                      
                      <div>
                        <label className="block font-semibold mb-2">12-Month M-PESA Statement (PDF)</label>
                        <input
                          type="file"
                          name="mpesaStatement"
                          onChange={handleFileChange}
                          accept=".pdf"
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.mpesaStatement ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                        />
                        {formData.mpesaStatement && (
                          <p className="text-green-600 text-sm mt-1">✓ {formData.mpesaStatement.name}</p>
                        )}
                        {errors.mpesaStatement && <p className="text-red-500 text-sm mt-1">{errors.mpesaStatement}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">M-PESA Statement Password</label>
                        <input
                          type="text"
                          name="mpesaPassword"
                          value={formData.mpesaPassword}
                          onChange={handleInputChange}
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.mpesaPassword ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                          placeholder="Enter the password to open your M-PESA statement"
                        />
                        {errors.mpesaPassword && <p className="text-red-500 text-sm mt-1">{errors.mpesaPassword}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">ID Photo (Front)</label>
                        <input
                          type="file"
                          name="idFront"
                          onChange={handleFileChange}
                          accept="image/*"
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.idFront ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                        />
                        {formData.idFront && (
                          <p className="text-green-600 text-sm mt-1">✓ {formData.idFront.name}</p>
                        )}
                        {errors.idFront && <p className="text-red-500 text-sm mt-1">{errors.idFront}</p>}
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">ID Photo (Back)</label>
                        <input
                          type="file"
                          name="idBack"
                          onChange={handleFileChange}
                          accept="image/*"
                          className={`w-full border-2 rounded-lg px-4 py-3 ${
                            errors.idBack ? 'border-red-500' : 'border-gray-300'
                          } focus:border-blue-600 focus:outline-none`}
                        />
                        {formData.idBack && (
                          <p className="text-green-600 text-sm mt-1">✓ {formData.idBack.name}</p>
                        )}
                        {errors.idBack && <p className="text-red-500 text-sm mt-1">{errors.idBack}</p>}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-8 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
                      >
                        ← Back
                      </button>
                    )}
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                      >
                        Continue →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                      >
                        Submit Application
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}