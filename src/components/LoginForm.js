import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button, Section, TextInputt, TextInputtE, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, emailChangedLog } from '../actions';

class LoginForm extends Component {
	Language() {
		if (this.props.language === 'Arabic'){
			return(
			<Card>
				<Section>
					<TextInputt
					label="البريد الإلكتروني"
						placeholder="البريد الإلكتروني"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.emaillog}
					/>
				</Section>

				<Section>
					<TextInputt
						secureTextEntry
						label="كلمة المرور"
						placeholder="كلمة المرور"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</Section>

				<Text style={styles.errorTextStyle}>
					{this.er()}
				</Text>

				<Section>
					{this.renderButton()}
				</Section>
			</Card>
		);
		}
		return(
			<Card>
				<Section>
					<TextInputtE
					label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.emaillog}
					/>
				</Section>

				<Section>
					<TextInputtE
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</Section>

				<Text style={styles.errorTextStyle}>
					{this.er()}
				</Text>

				<Section>
					{this.renderButton()}
				</Section>
			</Card>
		);
	}


	er(){
		if(this.props.error !== '')
		return ('wrong email or password ');
	}
	onEmailChange(text) {
	    this.props.emailChangedLog(text);
	  }

	  onPasswordChange(text) {
	    this.props.passwordChanged(text);
	  }

	  onButtonPress() {
	    const { emaillog, password } = this.props;

	    this.props.loginUser({ emaillog, password });
	  }

	  renderButton() {
	    if (this.props.loading) {
	      return <Spinner size="large" />;
	    }

     if(this.props.language === 'Arabic'){
	    return (
	      <Button whenPress={this.onButtonPress.bind(this)}>
				تسجيل الدخول!
	      </Button>
	    );
		}
		return (
			<Button whenPress={this.onButtonPress.bind(this)}>
			Login
			</Button>
		);
	  }

	  render() {

	    return (
				this.Language()
	    );
	  }
	}

	const styles = {
	  errorTextStyle: {
	    fontSize: 20,
	    alignSelf: 'center',
	    color: 'red'
	  }
	};

	const mapStateToProps = (state) => {
	  const { email, password, error, loading, emaillog } = state.auth;
		const language = state.language.Language;

	  return { language, email, password, error, loading, emaillog };
	};

	export default connect(mapStateToProps, {
	  emailChanged, passwordChanged, loginUser, emailChangedLog
	})(LoginForm);
