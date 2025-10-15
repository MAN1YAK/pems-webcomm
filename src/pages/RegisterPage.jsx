import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar_register from '../components/layout/NavbarRegister';
import Footer from '../components/layout/Footer';
import PaymentGatewayModal from '../components/modals/PaymentGatewayModal';
import styles from '../styles/RegisterPage.module.css';


const receipt = {
    items: [
        { name: 'Subscription Fee', amount: 49.99 },
    ],
    total: 49.99,
};

export default function RegisterPage() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log(formData);
        // Submit your form here

        setShowModal(true);
    };


    const closeModal = () => {
        setShowModal(false);
    };


    const handlePaymentSuccess = () => {
        setShowModal(false);
        navigate('/login'); // redirect after payment success
    };

    return (
        <div className={styles.body}>
            <Navbar_register />

            <div className={styles.content}>
                <form className={styles.registerForm} onSubmit={handleSubmit}>
                    <h2>Create Account</h2>

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Register</button>
                </form>
            </div>

            {showModal && (
                <PaymentGatewayModal
                    receiptData={receipt}
                    closeModal={closeModal}
                    onClose={() => setShowModal(false)}
                    onPaymentSuccess={handlePaymentSuccess}
                />
            )}
            <Footer />
        </div>
    )
}

