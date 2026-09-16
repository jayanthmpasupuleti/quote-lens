import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Radii, Spacing } from '@/theme';
import { APP_CONFIG } from '@/constants/config';
import { Screen, AppText, Card, Divider } from '@/components/ui';

interface SettingRowProps {
  icon?: string;
  label: string;
  value?: string;
  onPress?: () => void;
  showChevron?: boolean;
}

const SettingRow: React.FC<SettingRowProps> = ({
  icon,
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
      <View style={styles.leftContent}>
        {icon && (
          <View style={styles.iconOrb}>
            <AppText variant="caption" color={Colors.secondaryText}>
              {icon}
            </AppText>
          </View>
        )}
        <AppText variant="bodyMedium" color={Colors.primaryText} style={styles.labelText}>
          {label}
        </AppText>
      </View>

      <View style={styles.rightContent}>
        {value && (
          <AppText variant="body" color={Colors.secondaryText} style={styles.valueText}>
            {value}
          </AppText>
        )}
        {showChevron && (
          <AppText variant="caption" color={Colors.tertiaryText} style={styles.chevron}>
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
    Alert.alert(title, `${title} settings will be configurable in future updates.`);
  };

  return (
    <Screen scrollable withAmbientBackground>
      {/* Title */}
      <View style={styles.header}>
        <AppText variant="largeTitle" color={Colors.primaryText} style={styles.title}>
          Settings
        </AppText>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Card variant="glass" style={styles.groupCard}>
          <SettingRow
            icon="👤"
            label="Account"
            value="Not signed in"
            onPress={() => handleInfoPress('Account')}
          />
        </Card>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <AppText variant="label" color={Colors.secondaryText} style={styles.sectionTitle}>
          Preferences
        </AppText>
        <Card variant="glass" style={styles.groupCard}>
          <SettingRow
            label="Currency"
            value={`${APP_CONFIG.defaultCurrency} ${APP_CONFIG.defaultCurrencySymbol}`}
            onPress={() => handleInfoPress('Currency')}
          />
          <Divider marginVertical={Spacing.xxs} color={Colors.subtleBorder} />
          <SettingRow
            label="Appearance"
            value="System"
            onPress={() => handleInfoPress('Appearance')}
          />
          <Divider marginVertical={Spacing.xxs} color={Colors.subtleBorder} />
          <SettingRow
            label="Onboarding Tutorial"
            onPress={handleShowOnboarding}
          />
        </Card>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <AppText variant="label" color={Colors.secondaryText} style={styles.sectionTitle}>
          About
        </AppText>
        <Card variant="glass" style={styles.groupCard}>
          <SettingRow
            label="Privacy"
            onPress={() => handleInfoPress('Privacy')}
          />
          <Divider marginVertical={Spacing.xxs} color={Colors.subtleBorder} />
          <SettingRow
            label="Terms"
            onPress={() => handleInfoPress('Terms')}
          />
          <Divider marginVertical={Spacing.xxs} color={Colors.subtleBorder} />
          <SettingRow
            label="About QuoteLens"
            onPress={() => handleInfoPress('About QuoteLens')}
          />
        </Card>
      </View>

      {/* Version Footer */}
      <View style={styles.versionFooter}>
        <AppText variant="caption" color={Colors.tertiaryText}>
          Version {APP_CONFIG.version} (1)
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  section: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    marginBottom: Spacing.xs,
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
    color: '#4B5563',
  },
  groupCard: {
    paddingHorizontal: Spacing.xs,
    paddingVertical: 4,
    backgroundColor: Colors.surface,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: Spacing.sm,
    minHeight: 46,
  },
  rowPressed: {
    backgroundColor: Colors.pressed,
    borderRadius: Radii.medium,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconOrb: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 15,
    fontWeight: '500',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  valueText: {
    fontSize: 15,
    color: '#64748B',
  },
  chevron: {
    fontSize: 18,
    lineHeight: 18,
    color: '#94A3B8',
  },
  versionFooter: {
    alignItems: 'center',
    paddingVertical: Spacing.md,
    marginBottom: Spacing.xxl,
  },
});
