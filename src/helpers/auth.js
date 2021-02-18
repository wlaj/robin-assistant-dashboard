import { auth } from '../Firebase';

export function signup(email, password, dob, address) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function resetPassword(email) {
  return auth().sendPasswordResetEmail(email)
}

export function updateEmail(email) {
  return auth().updateEmail(email)
}

export function updatePassword(password) {
  return auth().updatePassword(password)
}

export function logout() {
  return auth().signOut()
}