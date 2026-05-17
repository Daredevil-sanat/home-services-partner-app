// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ScrollView, StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, Radius } from '../theme';

const SERVICES = [
  'Plumber', 'Electrician', 'Carpenter', 'Painter', 'AC Technician',
  'House Cleaning', 'Beauty Expert', 'Pest Control', 'Appliance Repair',
];

const STEPS = ['Personal Info', 'Service Type', 'Documents'];

export default function RegisterScreen({ navigation }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [experience, setExperience] = useState('');

  const toggleService = (s) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

      {/* Header */}
      <LinearGradient colors={[Colors.primary, '#1e3a8a']} style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => (step > 0 ? setStep(step - 1) : navigation.goBack())}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Become a Partner</Text>
        <Text style={styles.headerSub}>Step {step + 1} of {STEPS.length} — {STEPS[step]}</Text>

        {/* Progress bar */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${((step + 1) / STEPS.length) * 100}%` }]} />
        </View>
      </LinearGradient>

      <ScrollView style={styles.body} keyboardShouldPersistTaps="handled">
        <View style={styles.form}>

          {/* Step 0: Personal Info */}
          {step === 0 && (
            <>
              <Text style={styles.stepTitle}>Tell us about yourself</Text>
              <Text style={styles.label}>Full Name *</Text>
              <TextInput style={styles.input} placeholder="e.g. Ramesh Kumar" placeholderTextColor={Colors.textMuted} value={name} onChangeText={setName} />

              <Text style={[styles.label, { marginTop: Spacing.md }]}>Mobile Number *</Text>
              <View style={styles.inputRow}>
                <Text style={styles.prefix}>+91</Text>
                <TextInput style={[styles.input, { flex: 1, borderWidth: 0 }]} placeholder="10-digit number" placeholderTextColor={Colors.textMuted} keyboardType="phone-pad" maxLength={10} value={phone} onChangeText={setPhone} />
              </View>

              <Text style={[styles.label, { marginTop: Spacing.md }]}>City *</Text>
              <TextInput style={styles.input} placeholder="e.g. Mumbai" placeholderTextColor={Colors.textMuted} value={city} onChangeText={setCity} />
            </>
          )}

          {/* Step 1: Service Type */}
          {step === 1 && (
            <>
              <Text style={styles.stepTitle}>What services do you provide?</Text>
              <Text style={styles.stepSub}>Select all that apply</Text>
              <View style={styles.servicesGrid}>
                {SERVICES.map((s) => {
                  const selected = selectedServices.includes(s);
                  return (
                    <TouchableOpacity
                      key={s}
                      style={[styles.serviceChip, selected && styles.serviceChipSelected]}
                      onPress={() => toggleService(s)}
                      activeOpacity={0.8}
                    >
                      <Text style={[styles.serviceChipText, selected && styles.serviceChipTextSelected]}>
                        {s}
                      </Text>
                      {selected && <Ionicons name="checkmark-circle" size={16} color={Colors.white} style={{ marginLeft: 4 }} />}
                    </TouchableOpacity>
                  );
                })}
              </View>

              <Text style={[styles.label, { marginTop: Spacing.lg }]}>Years of Experience</Text>
              <TextInput style={styles.input} placeholder="e.g. 5" placeholderTextColor={Colors.textMuted} keyboardType="numeric" maxLength={2} value={experience} onChangeText={setExperience} />
            </>
          )}

          {/* Step 2: Documents */}
          {step === 2 && (
            <>
              <Text style={styles.stepTitle}>Almost there!</Text>
              <Text style={styles.stepSub}>Upload your documents to verify your identity</Text>
              {['Aadhaar Card', 'PAN Card', 'Profile Photo'].map((doc) => (
                <TouchableOpacity key={doc} style={styles.uploadCard} activeOpacity={0.8}>
                  <View style={styles.uploadIcon}>
                    <Ionicons name="cloud-upload-outline" size={24} color={Colors.primary} />
                  </View>
                  <View style={styles.uploadText}>
                    <Text style={styles.uploadTitle}>{doc}</Text>
                    <Text style={styles.uploadSub}>Tap to upload (JPG, PNG, PDF)</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
                </TouchableOpacity>
              ))}
              <View style={styles.termsRow}>
                <Ionicons name="shield-checkmark" size={16} color={Colors.accent} />
                <Text style={styles.termsText}>
                  By registering you agree to our{' '}
                  <Text style={{ color: Colors.primary, fontWeight: '600' }}>Terms & Conditions</Text>{' '}
                  and{' '}
                  <Text style={{ color: Colors.primary, fontWeight: '600' }}>Privacy Policy</Text>
                </Text>
              </View>
            </>
          )}

          {/* Next Button */}
          <TouchableOpacity style={styles.nextBtn} onPress={handleNext} activeOpacity={0.85}>
            <LinearGradient colors={[Colors.primary, Colors.primaryDark]} style={styles.nextBtnGrad}>
              <Text style={styles.nextBtnText}>
                {step === 2 ? 'Submit & Start Earning 🚀' : 'Continue'}
              </Text>
              {step < 2 && <Ionicons name="arrow-forward" size={18} color={Colors.white} style={{ marginLeft: 6 }} />}
            </LinearGradient>
          </TouchableOpacity>

          {step === 0 && (
            <View style={styles.loginRow}>
              <Text style={styles.loginText}>Already a partner? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.surface },
  header: { paddingTop: 56, paddingBottom: 40, paddingHorizontal: Spacing.lg },
  backBtn: { marginBottom: Spacing.md },
  headerTitle: { fontSize: 26, fontWeight: '800', color: Colors.white, marginBottom: 4 },
  headerSub: { color: 'rgba(255,255,255,0.75)', fontSize: 13, marginBottom: Spacing.md },
  progressBar: { height: 4, backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 2 },
  progressFill: { height: 4, backgroundColor: Colors.white, borderRadius: 2 },
  body: { flex: 1, marginTop: -Spacing.xl },
  form: {
    backgroundColor: Colors.surfaceCard,
    borderTopLeftRadius: Radius.xxl,
    borderTopRightRadius: Radius.xxl,
    padding: Spacing.xl,
    paddingTop: Spacing.xxl,
    minHeight: 500,
  },
  stepTitle: { fontSize: 20, fontWeight: '800', color: Colors.textPrimary, marginBottom: 6 },
  stepSub: { fontSize: 13, color: Colors.textSecondary, marginBottom: Spacing.lg },
  label: { fontSize: 13, fontWeight: '600', color: Colors.textPrimary, marginBottom: Spacing.xs },
  input: {
    borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.lg,
    paddingHorizontal: Spacing.md, paddingVertical: 14,
    fontSize: 15, color: Colors.textPrimary, backgroundColor: Colors.surface,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.lg,
    backgroundColor: Colors.surface,
  },
  prefix: { paddingHorizontal: Spacing.md, fontSize: 15, fontWeight: '600', color: Colors.textPrimary },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  serviceChip: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 14, paddingVertical: 10,
    borderRadius: Radius.full, borderWidth: 1.5, borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  serviceChipSelected: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  serviceChipText: { fontSize: 13, color: Colors.textPrimary, fontWeight: '600' },
  serviceChipTextSelected: { color: Colors.white },
  uploadCard: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1.5, borderColor: Colors.border, borderRadius: Radius.xl,
    padding: Spacing.md, marginBottom: Spacing.sm, backgroundColor: Colors.surface,
  },
  uploadIcon: {
    width: 44, height: 44, borderRadius: Radius.full, backgroundColor: Colors.primaryLight,
    alignItems: 'center', justifyContent: 'center', marginRight: Spacing.md,
  },
  uploadText: { flex: 1 },
  uploadTitle: { fontSize: 14, fontWeight: '700', color: Colors.textPrimary },
  uploadSub: { fontSize: 11, color: Colors.textMuted, marginTop: 2 },
  termsRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: Spacing.lg, marginBottom: Spacing.lg },
  termsText: { flex: 1, fontSize: 12, color: Colors.textSecondary, lineHeight: 18 },
  nextBtn: { borderRadius: Radius.xl, overflow: 'hidden', marginTop: Spacing.lg },
  nextBtnGrad: { paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  nextBtnText: { color: Colors.white, fontSize: 16, fontWeight: '700' },
  loginRow: { flexDirection: 'row', justifyContent: 'center', marginTop: Spacing.lg },
  loginText: { color: Colors.textSecondary, fontSize: 14 },
  loginLink: { color: Colors.primary, fontSize: 14, fontWeight: '700' },
});
