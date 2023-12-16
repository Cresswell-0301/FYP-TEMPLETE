import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 99.5vw;
    height: 95.5vh;
    background: linear-gradient(-60deg, rgba(0,0,0,1) 55%, rgba(255,255,255,1) 45%);
`;

const Left = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -120px;
`;

const LogoImg = styled.img`
    width: 50%;
`;

const Slogan = styled.h2`
    color: #000;
    font-family: Pridi;
    font-size: 32px;
    font-weight: 400;
`;

const Right = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 12%;
    margin-left: 70px;
    margin-right: -110px;
`;

const FormCon = styled.div`
    width: 38vw;
    height: 600px;
    border-radius: 17px;
    border: 1px solid #F8F9FA;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    color: #F8F9FA;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    text-decoration-line: underline;
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    margin: 0;
`;

const LabelCon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 45px;
    margin: 10px 0 15px 0;
`;

const Label = styled.label`
    width: 100%;
    color: #F8F9FA;
    font-size: 16px;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #F8F9FA;
    background-color: transparent;

    color: #F8F9FA;

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const LabelCon2 = styled(LabelCon)`
    width: 50%;
    padding-right: 0;
`;

const LabelRowCon = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0;
    margin: 0;
`;

const Input2 = styled(Input)`
    width: 100%;
`;

const ValidationText = styled.p`
    width: 30%;
    height: auto;
    margin-top: 0;
    margin-left: 25px;
    padding: 3px 0 0 5px;
    color: red;
    font-size: 12px;
    text-align: left;
    display: flex;
    align-items: center;
    /* background-color: yellow; */
`;

const BtnCon = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: auto;
    text-align: center;
`;

const Button = styled.button`
    width: 30%;
    padding: 10px;
    border: none;
    background-color: gray;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;

    &:hover{
        background-color: darkgray;
        color: black;
        border: 1px solid #F8F9FA;
    }
`;

const TNC = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5%;
    margin-left: 20px;
`;

const Star = styled.span`
    width: 3%;
    padding-left: 25px;
    color: #E9ECEF;
    font-family: Poppins;
    font-size: 13px;
    font-weight: 400;
    margin-top: 16px;
`;

const P = styled.p`
    color: #E9ECEF;
    width: 80%;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
`;

const TkInput = styled.input`
    width: 14px;
`;

const SpanTc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: -10px;
`;

const Txt = styled.p`
    color: #E9ECEF;
    width: 80%;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    margin-left: 5px;
`;

const A = styled.a`
    color: lightblue;

    &:hover {
        color: blue;
    }
`;

export default function SignUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

        // Email validation
        if (!validateEmail(email)) {
            setEmailError('*Please enter a valid email.');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        if (password !== confirmPassword) {
            setPasswordError('*Passwords do not match.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
        // Submit form
            window.location.href = 'after_login_page';
        }
    };

    // Helper function for email validation
    const validateEmail = (email) => {
        // Simple regex for email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };  

    return(
        <Container>
            <Left>
                <LogoImg src="Company_Logo_Black_Mode.png" alt="Company Logo" />
                <Slogan>The Perfect Fit for Your Phone !</Slogan>
            </Left>

            <Right>
                <FormCon>
                    <Form onSubmit={handleSubmit}method='post'>
                        <Title>Sign Up</Title>

                        <LabelCon>
                            <Label>Username</Label>
                            <Input
                            type="text"
                            placeholder="User Name"
                            required
                            />
                        </LabelCon>

                        <LabelRowCon>
                            <LabelCon2>
                                <Label>Email</Label>
                                <Input2
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </LabelCon2>

                            {emailError && <ValidationText>{emailError}</ValidationText>}
                        </LabelRowCon>
                        
                        <LabelCon>
                            <Label>Password</Label>
                            <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        </LabelCon>

                        <LabelRowCon>
                            <LabelCon2>
                                <Label>Confirm Password</Label>
                                <Input2
                                type="password"
                                placeholder="Re-Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                />
                            </LabelCon2>
                            
                            {passwordError && <ValidationText>{passwordError}</ValidationText>}                
                        </LabelRowCon>

                        <TNC>
                            <Star>*</Star>
                            <P>At least 8 characters long but 12 or more is better.</P>
                        </TNC>

                        <TNC>
                            <Star>*</Star>
                            <P>A combination of UPPERCASE letters, lowercase letters, numbers, and symbols.</P>
                        </TNC>

                        <SpanTc>
                            <TkInput type='checkbox' required/>
                            <Txt>
                                By signing up, you agree to Name's <A href='#'>Terms of Service</A> & <A href='#'>Privacy Policy</A>
                            </Txt>
                        </SpanTc>

                        <BtnCon>
                            <Button type="submit">Proceed</Button>
                        </BtnCon>

                    </Form>
                </FormCon>
            </Right>
        </Container>
    )
}