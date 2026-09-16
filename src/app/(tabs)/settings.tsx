import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { APP_CONFIG } from '@/constants/config';
import { Screen, AppText, Card, Divider } from '@/components/ui';

interface SettingRowProps {
  label: string;
  value?: string;
  onPress?: () => void;
  showChevron?: boolean;
}

const SettingRow: React.FC<SettingRowProps> = ({
  label,
  value,
  onPress,
  showChevron = true,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      accessibilityRole="button"
      accessibilityLabel={`${label}${value ? `, ${value}` : ''}`}
    >
      <AppText variant="body" color={Colors.primaryText}>
        {label}
      </AppText>
      <View style={styles.rightContent}>
        {value && (
          <AppText variant="body" color={Colors.secondaryText}>
            {value}
          </AppText>
        )}
        {showChevron && (
          <AppText variant="caption" color={Colors.secondaryText} style={styles.chevron}>
            ›
          </AppText>
        )}
      </View>
    </Pressable>
  );
};

export default function SettingsScreen() {
  const router = useRouter();

  const handleShowOnboarding = () => {
    router.push('/onboarding');
  };

  const handleInfoPress = (title: string) => {
    Alert.alert(title, `${title} information will be accessible here in upcoming updates.`);
  };

  return (
    <Screen scrollable>
      {/* Title */}
      <View style={styles.header}>
        <AppText variant="largeTitle" color={Colors.primaryText}>
          Settings
        </AppText>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <AppText variant="label" color={Colors.secondaryText} style={styles.sectionTitle}>
          ACCOUNT
        </AppText>
        <Card style={styles.groupCard}>
          <SettingRow
            label="Account"
            value="Not signed in"
            onPress={() => handleInfoPress('Account')}
          />
        </Card>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <AppText variant="label" color={Colors.secondaryText} style={styles.sectionTitle}>
          PREFERENCES
        </AppText>
        <Card style={styles.groupCard}>
          <SettingRow
            label="Currency"
            value={`${APP_CONFIG.defaultCurrency} ${APP_CONFIG.defaultCurrencySymbol}`}
            showChevron={false}
          />
          <Divider marginVertical={Spacing.xs} />
          <SettingRow
            label="Initial Market"
            value={APP_CONFIG.initialMarket}
            showChevron={false}
          />
          <Divider marginVertical={Spacing.xs} />
          <SettingRow
            label="View Onboarding Tutorial"
            onPress={handleShowOnboarding}
          />
        </Card>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <AppText variant="label" color={Colors.secondaryText} style={styles.sectionTitle}>
          ABOUT
        </AppText>
        <Card style={styles.groupCard}>
          <SettingRow
            label="About QuoteLens"
            onPress={() => handleInfoPress('About QuoteLens')}
          />
          <Divider marginVertical={Spacing.xs} />
          <SettingRow
            label="Privacy"
            onPress={() => handleInfoPress('Privacy Policy')}
          />
          <Divider marginVertical={Spacing.xs} />
          <SettingRow
            label="Terms"
            onPress={() => handleInfoPress('Terms of Service')}
          />
          <Divider marginVertical={Spacing.xs} />
          <SettingRow
            label="Version"
            value={APP_CONFIG.version}
            showChevron={false}
          />
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    marginBottom: Spacing.xs,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  groupCard: {
    padding: Spacing.xs,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    minHeight: 44,
  },
  rowPressed: {
    backgroundColor: Colors.pressed,
    borderRadius: Radii.small,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chevron: {
    fontSize: 18,
    lineHeight: 20,
    color: '#9CA3AF',
  },
});
